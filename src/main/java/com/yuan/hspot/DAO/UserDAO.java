package com.yuan.hspot.DAO;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import com.yuan.hspot.User;
import com.yuan.hspot.Entity.UserDetails;

import io.dropwizard.hibernate.AbstractDAO;

public class UserDAO extends AbstractDAO<UserDetails>{

	public UserDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
	public UserDetails findById(int id){
		return get(id);
	}
	
	public List<UserDetails> findByEmail(String email){
		Criteria criteria = currentSession().createCriteria(UserDetails.class);
		List<UserDetails> result = criteria.add(Restrictions.eq("email", email)).list();
		return result;
	}
	
	public UserDetails create(UserDetails user){
		return persist(user);
	}
	
	public UserDetails update(UserDetails user){
		currentSession().merge(user);
		return user;
	}
	
	public List<UserDetails> findAll(){
		return list(namedQuery("UserDetails.findAll"));
	}
	
	// filter user based on the criteria provided by the user such as role, skills etc
	public List<UserDetails> filterUsers(List<String> skills, String role) {

		Criteria criteria = currentSession().createCriteria(UserDetails.class);
		criteria = criteria.setProjection(Projections.distinct(Projections.property("userID")));
		
		if(role != null){
			criteria = criteria.add(Restrictions.eq("role", role));
		}
		
		Disjunction or = Restrictions.disjunction();
		if(skills.size() > 0){
			criteria = criteria.createCriteria("skills");
			for(String skill:skills){
				or = (Disjunction) or.add(Restrictions.eq("elements", skill));
			}
			criteria = criteria.add(or);
		}
		
		List<UserDetails> result = (List<UserDetails>)criteria.list();
		
		return result;
	}

	public List<UserDetails> authToConvo(User user, int convoId) {
		return list(namedQuery("UserDetails.accessToConvo").setInteger("convoId", convoId).setInteger("userId",user.getUserId()));
	}
	
	public List<UserDetails> authToMsg(User user, int msgId) {
		return list(namedQuery("UserDetails.accessToMsg").setInteger("msgId", msgId).setInteger("userId",user.getUserId() ));
	}
	
	public List<UserDetails> authToReview(User user, int reviewId) {
		return list(namedQuery("UserDetails.accessToEditReview").setInteger("reviewId", reviewId).setInteger("userId",user.getUserId() ));
	}

}
