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
	
	public int create(Review review){
		return persist(review).getReviewID();
	}
	
	public List<Review> findAll(){
		return list(namedQuery("Review.findAll"));
	}

}
