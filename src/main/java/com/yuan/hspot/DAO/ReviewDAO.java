package com.yuan.hspot.DAO;

import java.util.ArrayList;
import java.util.List;

import com.yuan.hspot.JsonMapper.ReviewSummary;
import org.hibernate.SessionFactory;

import com.yuan.hspot.Entity.Review;

import io.dropwizard.hibernate.AbstractDAO;

public class ReviewDAO extends AbstractDAO<Review>{

	public ReviewDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
	public Review create(Review review){
		return persist(review);
	}
	
	public Review update(Review review){
		currentSession().merge(review);
		return review;
	}
	
	public List<Review> findAll(){
		return list(namedQuery("Review.findAll"));
	}
	
	public int deleteReviewById(int reviewId){
		int numDeleted = currentSession().getNamedQuery("Review.deleteById").setInteger("reviewId", reviewId).executeUpdate();
		return numDeleted;
	}

	public List<ReviewSummary> findReviewByUser(int userId) {
		List<Review> results = list(currentSession().getNamedQuery("Review.reviewsByUser").setInteger("userID", userId));
		List<ReviewSummary> reviews = new ArrayList<ReviewSummary>();
		for(Review result:results){
			reviews.add(new ReviewSummary(result.getReviewID(),
                    result.getReviewContent(),
                    result.getReviewGiver().getUserID(),
                    result.getReviewGiver().getProfilePicPath(),
                    result.getStar()));
		}
		return reviews;
	}

}
