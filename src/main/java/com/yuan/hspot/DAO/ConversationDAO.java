package com.yuan.hspot.DAO;

import java.util.List;

import org.hibernate.SessionFactory;

import com.yuan.hspot.Entity.Conversation;

import io.dropwizard.hibernate.AbstractDAO;

public class ConversationDAO extends AbstractDAO<Conversation>{

	public ConversationDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
	public int create(Conversation conversation){
		return persist(conversation).getConversationID();
	}
	
	public Conversation findById(int id){
		return get(id);
	}
	
	public List<Conversation> findAll(){
		return list(namedQuery("Conversation.findAll"));
	}
	

}
