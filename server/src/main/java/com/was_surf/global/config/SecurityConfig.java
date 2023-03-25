package com.was_surf.global.config;

import com.was_surf.global.config.jwt.JwtAuthenticationFilter;
import com.was_surf.global.config.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtTokenProvider jwtTokenProvider;
    private final RedisTemplate redisTemplate;

    @Bean
    public PasswordEncoder encoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // x-frame-options 기능 끄기
                .headers().frameOptions().disable()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .authorizeRequests()
                .antMatchers("/api/weather").permitAll()
                .antMatchers("/api/region").permitAll()
                .antMatchers("/members").permitAll()
                .antMatchers("/board-posts").hasAnyRole("USER", "ADMIN", "TEACHER")
                .antMatchers("/board-comments").hasAnyRole("USER", "ADMIN", "TEACHER")
                .antMatchers("/h2-console/**)").permitAll()
                .and()
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider, redisTemplate), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true);
        config.setAllowedOrigins(Arrays.asList("http://localhost:3000", "https://91c2-219-251-79-133.jp.ngrok.io"));
        config.setAllowedOriginPatterns(Arrays.asList("*"));
        config.setAllowedHeaders(Arrays.asList("*"));
        config.addExposedHeader("Authorization");
        config.setAllowedMethods(Arrays.asList("GET", "POST", "OPTIONS", "PATCH", "DELETE", "PUT"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", config);

        return source;
    }
}