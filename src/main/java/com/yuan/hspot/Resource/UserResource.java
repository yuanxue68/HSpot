package com.yuan.hspot.Resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yuan.hspot.User;
import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.Review;
import com.yuan.hspot.Entity.UserDetails;

import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {
	private UserDAO userDAO;
	public UserResource(UserDAO _userDAO) {
		userDAO = _userDAO;
	}

	@GET
	@UnitOfWork
	public Response filterUsers(
			@QueryParam("skills") final List<String> skills,
			@QueryParam("role") final String role,
			@Auth User user){
		List<UserDetails> filteredUsers = userDAO.filterUsers(skills,role);
		return Response.ok(filteredUsers).build();
	}
	
	@GET
	@Path("/{id}")
	@UnitOfWork
	public Response getUserById(@PathParam("id") int id){
		UserDetails userDetails = userDAO.findById(id);
		return Response.ok(userDetails).build();
	}
	
	@PUT
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@UnitOfWork
	public Response editUser(@PathParam("id") int id, UserDetails userDetails, @Auth User user){
		userDetails.setUserID(id);
		UserDetails newUser = userDAO.update(userDetails);
		return Response.ok(newUser).build();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@UnitOfWork
	public Response createUser(UserDetails userDetails){
		UserDetails createdUser = userDAO.create(userDetails);
		return Response.ok(createdUser).build();
	}

}
