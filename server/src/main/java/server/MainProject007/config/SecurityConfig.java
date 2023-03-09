package server.MainProject007.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(Customizer.withDefaults())
                .authorizeRequests()
                .antMatchers("/members/login").permitAll() // 로그인 페이지 모두 접근 가능
                .anyRequest().permitAll()
                .and()
                .formLogin()
                .loginPage("/members/login") // 로그인 페이지 경로 지정
                .defaultSuccessUrl("/") // 로그인 성공 후 이동할 페이지
                .permitAll()
                .and()
                .logout()
                .logoutUrl("/members/logout") // 로그아웃 URL 지정
                .logoutSuccessUrl("/") // 로그아웃 후 이동할 페이지
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID");
    }
}

