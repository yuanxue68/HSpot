package com.yuan.hspot.Auth;

import java.security.Key;
import java.util.Date;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWT {
	//should be moved to config
	private final static String SECRET_KEY = "secret";
	
	public static String createJWT(String userEmail,long ttl ){
		SignatureAlgorithm sigAlgo = SignatureAlgorithm.HS256;
		long nowMillis = System.currentTimeMillis();
		Date now = new Date(nowMillis);
		
		byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
		Key signingKey = new SecretKeySpec(apiKeySecretBytes, sigAlgo.getJcaName());
		
		JwtBuilder builder = Jwts.builder().setId(userEmail)
                .setIssuedAt(now)
                .signWith(sigAlgo, signingKey);
		
		if (ttl >= 0) {
		    long expMillis = nowMillis + ttl;
		    Date exp = new Date(expMillis);
		    builder.setExpiration(exp);
		}
		
		return builder.compact();
	}
	
	public static Claims verifyJWT(String jwt) throws Exception{
		Claims claims = Jwts.parser()         
				   .setSigningKey(DatatypeConverter.parseBase64Binary(SECRET_KEY))
				   .parseClaimsJws(jwt).getBody();
		return claims;
	}
}
