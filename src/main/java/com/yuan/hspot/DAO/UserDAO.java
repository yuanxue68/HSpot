package com.yuan.hspot.DAO;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import com.yuan.hspot.Entity.UserDetails;

import io.dropwizard.hibernate.AbstractDAO;

public class UserDAO extends AbstractDAO<UserDetails>{

	public UserDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
	public UserDetails findById(int id){
		return get(id);
	}
	
	public int create(UserDetails user){
		return persist(user).getUserID();
	}
	
	public List<UserDetails> findAll(){
		return list(namedQuery("UserDetails.findAll"));
	}

	public List<UserDetails> filterUsers(List<String> skills, String role) {

		Criteria criteria = currentSession().createCriteria(UserDetails.class);
		criteria = criteria.setProjection(Projections.distinct(Projections.property("userID")));
		
		if(role!=null){
			criteria = criteria.add(Restrictions.eq("role", role));
		}
		
		Disjunction or = Restrictions.disjunction();
		if(skills != null){
			criteria = criteria.createCriteria("skills");
			for(String skill:skills){
				or = (Disjunction) or.add(Restrictions.eq("elements", skill));
			}
			criteria = criteria.add(or);
		}
		
		List<UserDetails> result = (List<UserDetails>)criteria.list();
		return result;
	}

}
