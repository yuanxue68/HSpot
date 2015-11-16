package com.yuan.hspot.Resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yuan.hspot.User;
import com.yuan.hspot.DAO.ReviewDAO;
import com.yuan.hspot.Entity.Review;

import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/user/{userId}/reviews")
@Produces(MediaType.APPLICATION_JSON)
public class ReviewResource {
	private ReviewDAO reviewDAO;
	
	public ReviewResource(ReviewDAO reviewDAO){
		this.reviewDAO = reviewDAO;
		
	}

	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@UnitOfWork
	public Response createUserReview(@PathParam("id") int id, Review review, @Auth User user){
		return Response.noContent().build();
	}
	
	@PUT
	@Path("/{reviewId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@UnitOfWork
	public Response updateUserReview(@PathParam("id") int id, @PathParam("reviewId") int reviewId, Review review, @Auth User user){
		return Response.noContent().build();
	}
	
	@DELETE
	@Path("/{reviewId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@UnitOfWork
	public Response deleteUserReview(@PathParam("id") int id, @PathParam("reviewId") int reviewId, Review review, @Auth User user){
		return Response.noContent().build();
	}
}
