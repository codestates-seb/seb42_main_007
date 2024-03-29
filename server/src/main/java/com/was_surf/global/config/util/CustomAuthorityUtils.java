package com.was_surf.global.config.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {

    @Value("${mail.address.admin}")
    private String adminMailAddress;

    @Value("${mail.address.teacher}")
    private String teacherMailAddress;

    private final List<GrantedAuthority> ADMIN_ROLES = AuthorityUtils.createAuthorityList("ROLE_ADMIN");

    private final List<GrantedAuthority> TEACHER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER","ROLE_TEACHER");

    private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN");

    private final List<String> TEACHER_ROLES_STRING = List.of("TEACHER","USER");
    private final List<String> USER_ROLES_STRING = List.of("USER");
    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
        return authorities;
    }

    public List<String> createRoles(String email) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES_STRING;
        } if (email.equals(teacherMailAddress)){
            return TEACHER_ROLES_STRING;
        }
        return USER_ROLES_STRING;
    }
}
