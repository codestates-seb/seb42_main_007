package com.was_surf.domain.spot_data.application;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalTime;

@Service
@Slf4j
public class SpotDataService {

    // 일정시간마다 데이터 가져오기
    //cron 표현식, fixedDelay, fixedRate 등 실행 주기 옵션 필수
    //return 타입이 void여야 함 / parameter를 줄 수 없음
    @Scheduled(initialDelay = 10000, fixedDelay = 10000)
    public void runAfterTenSecondsRepeatTenSeconds() {
        log.info("10초 후 실행 => time : " + LocalTime.now());
    }
}