package com.was_surf;

//import server.MainProject007.SpringBootApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class WasSurfApplication {

	public static void main(String[] args) {
		SpringApplication.run(WasSurfApplication.class, args);
	}

}
