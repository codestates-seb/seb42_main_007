package com.was_surf.domain.spot_data.application;

import com.was_surf.domain.weather.domain.Weather;
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

    @Scheduled(cron = "0 0 0/3 1/1 * *")
    public void runEveryTenSecondsOne() {

        Region region = Region.getTemp();


//        log.info("3시간에 한번 : " + LocalTime.now());
//        log.info("thread: " + Thread.currentThread().getName());
//        log.info("==============================================");

        // 여기서 온도 / 파고 / 풍속 데이터 3시간에 한번 받아오기

        // if 문 넣고
        // repository.save 하기
    }

    @Scheduled(fixedRate = 10000L)
    public void runEveryTenSecondsTwo() {
        log.info("10.000L 10초에 한번 : " + LocalTime.now());
        log.info("thread: " + Thread.currentThread().getName());
        log.info("==============================================");
    }


}


/*

1. 온도 int temp

int temp = get온도()
if (temp=<10) { return 0
} else if (10<temp && temp<=12) { return 1;
} else if (12<temp && temp<=14) { return 2;
} else if (14<temp && temp<=17) { return 3;
} else if (17<temp && temp<=21) { return 4;
} else return 5;


2. 파고 int wave

int wave = get파고() 단위 m
if (wave=<0.3) { return 0;
} else if (0.3<wave && wave<=0.8) { return 1;
} else if (0.8<wave && wave<=1.4) { return 3;
} else return 2;



3. 풍속 int windSpeed

int windSpeed = get풍속() 단위 kts(10kts = 약 5m/s)
if (windSpeed<=5) { return 2;
} else if (5<windSpeed && windSpeed<=14) { return 1;
} else return 0;



*/



