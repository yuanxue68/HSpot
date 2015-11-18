package com.yuan.hspot.DAO;

import java.util.List;

import org.hibernate.SessionFactory;

import com.yuan.hspot.Entity.Review;

import io.dropwizard.hibernate.AbstractDAO;

public class ReviewDAO extends AbstractDAO<Review>{

	public ReviewDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
	public Review findById (int id){
		return get(id);
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

	public List<Review> findReviewByUser(int userId) {
		List<Review> reviews = list(currentSession().getNamedQuery("Review.reviewsByUser").setInteger("reviewReceiver", userId));
		return reviews;
	}

}
