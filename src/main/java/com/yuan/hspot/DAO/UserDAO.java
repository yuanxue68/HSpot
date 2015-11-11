package com.yuan.hspot.DAO;

import java.util.List;

import org.hibernate.SessionFactory;

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

}
