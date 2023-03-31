package com.was_surf.domain.spot_data.application;

import com.was_surf.domain.spot_data.domain.SpotData;
import com.was_surf.domain.spot_data.repository.SpotDataRepository;
import com.was_surf.domain.weather.domain.Region;
import com.was_surf.domain.weather.domain.Weather;
import com.was_surf.domain.weather.repository.RegionRepository;
import com.was_surf.global.error.exception.BusinessLogicException;
import com.was_surf.global.error.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class SpotDataService {

    private final RegionRepository regionRepository;
    private final SpotDataRepository spotDataRepository;

    // 3시간에 한번씩 업데이트(API 제공 시간에서 2초 뒤)
    @Scheduled(cron = "2 10 2-23/3 1/1 * *")
    public void runEveryTenSecondsOne() {

        for (long i=1; i<=8; i++) {
            SpotData spotData = updateSpotData(i);
            spotDataRepository.save(spotData);

        log.info("3시간에 한번: " + LocalTime.now());
        log.info("thread: " + Thread.currentThread().getName());
        log.info("==============================================");
        }
    }

    public SpotData updateSpotData (Long id) {
        Optional<SpotData> optionalSpotData = spotDataRepository.findById(id);
        SpotData findSpotData = optionalSpotData.orElseThrow(() -> new BusinessLogicException(ExceptionCode.SPOTDATA_NOT_FOUND));

        Optional<Region> optionalRegion = regionRepository.findById(id);
        Region findRegion = optionalRegion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.SPOTDATA_NOT_FOUND));

        findSpotData.setRegion(findRegion);
        findSpotData.setTempScore(classifyTempScore(Float.parseFloat(findSpotData.getRegion().getWeather().getTemp())));
        findSpotData.setWaveScore(classifyWaveScore(Float.parseFloat(findSpotData.getRegion().getWeather().getWave())));
        findSpotData.setWindSpeedScore(classifyWindSpeedScore(Float.parseFloat(findSpotData.getRegion().getWeather().getWindSpeed())));

        findSpotData.sumScore();

        return findSpotData;
    }

    // 온도
    public int classifyTempScore (Float temp) {
        if ( temp<=11 ) { // 11도 이하
            return 0;
        } else if (11<temp && temp<=15) { // 12~15도
            return 1;
        } else if (15<temp && temp<=17) { // 16~17도
            return 2;
        } else if (17<temp && temp<=20) { // 18~20도
            return 3;
        } else if (20<temp && temp<=23) { // 21~23도
            return 4;
        } else if (23<temp && temp<=26) { // 24~26도
            return 5;
        } else if (26<temp && temp<=29) { // 27~29도
            return 6;
        } else if (29<temp && temp<=32) { // 30~32도 이상 => 적정 온도
            return 7;
        } else return 6;
    }

    // 파고
    public int classifyWaveScore (Float wave) {
        if (wave<=0.3) { // 0.3m 이하
            return 0;
        } else if (0.3<wave && wave<=0.8) { // 0.4~0.8m
            return 1;
        } else if (0.8<wave && wave<=1.4) { // 0.9~1.4m
            return 4; // 난이도 분류가 없기 때문에 제일 무난한 코스가 점수 높음
        } else if (1.4<wave && wave<=1.8) { // 1.5m~1.8
            return 3;
        } else return 2; // 1.5m 이상
    }

    // 풍속
    public int classifyWindSpeedScore (Float windSpeed) {
        if (windSpeed<=0.2) { // 0.2m/s 이하 => 바람은 안 불수록 좋다
            return 8;
        } else if (0.2<windSpeed && windSpeed<=1.5) { // 0.3~1.5m/s
            return 7;
        } else if (1.5<windSpeed && windSpeed<=3.3) { // 1.6~3.3m/s
            return 6;
        } else if (3.3<windSpeed && windSpeed<=5.4) { // 3.3~5.4m/s
            return 5;
        } else if (5.4<windSpeed && windSpeed<=7.9) { // 5.5~7.9m/s
            return 4;
        } else if (7.9<windSpeed && windSpeed<=10.7) { // 8.0~10.7m/s
            return 3;
        } else if (10.7<windSpeed && windSpeed<=13.8) { // 10.8~13.8m/s
            return 2;
        } else if (13.8<windSpeed && windSpeed<=17.1) { // 13.9~17.1m/s
            return 1;
        } else  return 0; // 17.2m/s 이상
    }
}

