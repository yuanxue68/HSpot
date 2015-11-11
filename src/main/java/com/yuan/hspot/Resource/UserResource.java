package com.yuan.hspot.Resource;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.Skill;
import com.yuan.hspot.Entity.UserDetails;

import io.dropwizard.hibernate.UnitOfWork;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {
	private UserDAO userDAO;
	public UserResource(UserDAO _userDAO) {
		userDAO = _userDAO;
	}

	@GET
	@Path("/")
	@UnitOfWork
	public Response filterUsers(
			@QueryParam("skills") final List<String> skills,
			@QueryParam("role") final String role){
		List<UserDetails> filteredUsers = userDAO.filterUsers(skills,role);
		return Response.noContent().build();
	}

}
