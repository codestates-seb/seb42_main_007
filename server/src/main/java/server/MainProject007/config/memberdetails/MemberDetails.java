package server.MainProject007.config.memberdetails;

import org.springframework.security.core.userdetails.UserDetails;

public interface MemberDetails extends UserDetails {
    long getMemberId();
    String getEmail();
    String getDisplayName();


}
