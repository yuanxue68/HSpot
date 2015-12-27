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
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yuan.hspot.Auth.User;
import com.yuan.hspot.Constants.ResponseConstants;
import com.yuan.hspot.DAO.ReviewDAO;
import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.Review;
import com.yuan.hspot.Entity.UserDetails;

import com.yuan.hspot.JsonMapper.ReviewSummary;
import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/user/{userId}/reviews")
@Produces(MediaType.APPLICATION_JSON)
public class ReviewResource {
	private ReviewDAO reviewDAO;
	private UserDAO userDAO;
	
	public ReviewResource(ReviewDAO reviewDAO, UserDAO userDAO){
		this.reviewDAO = reviewDAO;
		this.userDAO = userDAO;
	}
	
	@GET
	@Path("/")
	@UnitOfWork
	public Response getUserReview(@PathParam("userId") int userId, @Auth User user){
		List<ReviewSummary> reviews = reviewDAO.findReviewByUser(userId);
		return Response.ok(reviews).build();
	}

	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@UnitOfWork
	public Response createUserReview(@PathParam("userId") int userId, Review review, @Auth User user){
		if(review.getReviewContent().isEmpty()){
			return Response.status(Response.Status.BAD_REQUEST).entity(ResponseConstants.EMPTY_REVIEW).build();
		}

        if(user.getUserId() == userId){
            return Response.status(Response.Status.BAD_REQUEST).entity(ResponseConstants.REVIEW_CANT_REVIEW_YOURSELF).build();
        }

		review.setReviewGiver(new UserDetails(user.getUserId()));
		review.setReviewReceiver(new UserDetails(userId));

		Review reviewCreated = reviewDAO.create(review);
		ReviewSummary reviewSummary = new ReviewSummary(
                reviewCreated.getReviewID(),
                reviewCreated.getReviewContent(),
                reviewCreated.getReviewGiver().getUserID(),
                "",
                reviewCreated.getStar()
				);
		return Response.ok(reviewSummary).build();
	}
	
	@PUT
	@Path("/{reviewId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@UnitOfWork
	public Response updateUserReview(@PathParam("userId") int userId, @PathParam("reviewId") int reviewId, Review review, @Auth User user){
		if (userDAO.authToReview(user, reviewId).size() < 1){
			return Response.status(Response.Status.UNAUTHORIZED).entity(ResponseConstants.REVIEW_NO_EDIT_RIGHT).build();
		}
		if(review.getReviewContent().isEmpty()){
			Response.status(Response.Status.BAD_REQUEST).entity(ResponseConstants.EMPTY_REVIEW).build();
		}
		review.setReviewID(reviewId);
		review.setReviewGiver(new UserDetails(user.getUserId()));
		review.setReviewReceiver(new UserDetails(userId));
		Review updatedReview = reviewDAO.update(review);
		return Response.ok().entity(updatedReview).build();
	}
	
	@DELETE
	@Path("/{reviewId}")
	@UnitOfWork
	public Response deleteUserReview(@PathParam("userId") int userId, @PathParam("reviewId") int reviewId, @Auth User user){
		if (userDAO.authToReview(user, reviewId).size() < 1){
			return Response.status(Response.Status.UNAUTHORIZED).entity(ResponseConstants.REVIEW_NO_DELETE_RIGHT).build();
		}
		int numDeleted = reviewDAO.deleteReviewById(reviewId);
		return Response.ok().entity(numDeleted).build();
	}
}
