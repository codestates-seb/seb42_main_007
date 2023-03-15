package server.MainProject007.config.jwt;

import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;

import java.security.SignatureException;
import java.util.Date;

@Component
public class TokenProvider {

    private static final String SECRET_KEY = "5i1e";
    private static final long EXPIRATION_TIME = 3600000L;

    public String createToken(String username) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    public String getUsername(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (MalformedJwtException ex) {
             return false;
        } catch (ExpiredJwtException ex) {
             return false;
        } catch (UnsupportedJwtException ex) {
             return false;
        } catch (IllegalArgumentException ex) {
             return false;
        }
    }
}

