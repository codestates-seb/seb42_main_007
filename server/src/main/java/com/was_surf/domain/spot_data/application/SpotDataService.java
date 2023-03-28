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

    // 3시간에 한번씩 업데이트(API 제공 시간에서 1분 뒤)
    @Scheduled(cron = "0 11 2-23/3 1/1 * *")
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
        if ( temp<=10 ) { // 10도 이하
            return 0;
        } else if (10<temp && temp<=12) { // 11~12도
            return 1;
        } else if (12<temp && temp<=14) { // 13~14도
            return 2;
        } else if (14<temp && temp<=17) { // 15~17도
            return 3;
        } else if (17<temp && temp<=21) { // 18~21도
            return 4;
        } else { // 22도 이상
            return 5;
        }
    }

    // 파고
    public int classifyWaveScore (Float wave) {
        if (wave<=0.3) { // 0.3m 이하
            return 0;
        } else if (0.3<wave && wave<=0.8) { // 0.4~0.8m
            return 1;
        } else if (0.8<wave && wave<=1.4) { // 0.9~1.4m
            return 3; // 난이도 분류가 없기 때문에 제일 무난한 코스가 점수 높음
        } else return 2; // 1.5m 이상
    }

    // 풍속
    public int classifyWindSpeedScore (Float windSpeed) {
        if (windSpeed<=2.57) { // 5knots = 2.57m/s 이하
            return 2;
        } else if (2.57<windSpeed && windSpeed<=7.20) { // ~ 14knots = 7.20m/s
            return 1;
        } else return 0; // 15knots 이상
    }
}

