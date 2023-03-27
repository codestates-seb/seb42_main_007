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

    // 일정시간마다 데이터 가져오기
    //cron 표현식, fixedDelay, fixedRate 등 실행 주기 옵션 필수
    //return 타입이 void여야 함 / parameter를 줄 수 없음

//    @Scheduled(cron = "0 0 0/3 1/1 * *")
//    public void runEveryTenSecondsOne() {
//
////        Region region = Region.getTemp();
//
////        log.info("3시간에 한번 : " + LocalTime.now());
////        log.info("thread: " + Thread.currentThread().getName());
////        log.info("==============================================");
//
//        // 여기서 온도 / 파고 / 풍속 데이터 3시간에 한번 받아오기
//
//        // if 문 넣고
//        // repository.save 하기
//
//    }

    @Scheduled(fixedRate = 10000L)
    public void runEveryTenSecondsTwo() {

        for (long i=1; i<=8; i++) {
            SpotData spotData = updateSpotData(i);
            spotDataRepository.save(spotData);
        }

        log.info("10.000L 10초에 한번 : " + LocalTime.now());
        log.info("thread: " + Thread.currentThread().getName());
        log.info("==============================================");
    }


    public SpotData updateSpotData (Long id) {
        Optional<SpotData> optionalSpotData = spotDataRepository.findById(id);
        SpotData findSpotData = optionalSpotData.orElseThrow(() -> new BusinessLogicException(ExceptionCode.SPOTDATA_NOT_FOUND));

        // Optional: 값이 있을 수도 있고 null일 수도 있음
        Optional<Region> optionalRegion = regionRepository.findById(id);
        Region findRegion = optionalRegion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.SPOTDATA_NOT_FOUND));

        findSpotData.setRegion(findRegion);
        findSpotData.setTempScore(classifyTempScore(Float.parseFloat(findSpotData.getRegion().getWeather().getTemp())));
        findSpotData.setWaveScore(classifyWaveScore(Float.parseFloat(findSpotData.getRegion().getWeather().getWave())));
        findSpotData.setWindSpeedScore(classifyWindSpeedScore(Float.parseFloat(findSpotData.getRegion().getWeather().getWindSpeed())));

        findSpotData.sumScore();

        return findSpotData;
    }

    public int classifyTempScore (Float temp) {
        if ( temp<=10 ) {
            return 0;
        } else if (10<temp && temp<=12) {
            return 1;
        } else if (12<temp && temp<=14) {
            return 2;
        } else if (14<temp && temp<=17) {
            return 3;
        } else if (17<temp && temp<=21) {
            return 4;
        } else {
            return 5;
        }
    }

    public int classifyWaveScore (Float wave) {
        if (wave<=0.3) {
            return 0;
        } else if (0.3<wave && wave<=0.8) {
            return 1;
        } else if (0.8<wave && wave<=1.4) {
            return 3;
        } else return 2;
    }

    public int classifyWindSpeedScore (Float windSpeed) {
        if (windSpeed<=5) {
            return 2;
        } else if (5<windSpeed && windSpeed<=14) {
            return 1;
        } else return 0;
    }



}




