package com.yuan.hspot.Resource;

import java.util.concurrent.TimeUnit;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yuan.hspot.Auth.JWT;
import com.yuan.hspot.Auth.User;
import com.yuan.hspot.JsonMapper.Token;

import io.dropwizard.auth.Auth;

@Path("/token")
@Produces(MediaType.APPLICATION_JSON)
public class TokenResource {
	
	public TokenResource(){
		
	}
	
	@GET
	public Response getToken(@Auth User user){
		String jwt = JWT.createJWT(user.getName(), TimeUnit.DAYS.toMillis(365));
		Token token = new Token(jwt);
		return Response.ok().entity(token).build();
	}

}
