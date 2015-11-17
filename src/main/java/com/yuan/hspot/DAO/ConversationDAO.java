package com.yuan.hspot.DAO;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

import com.yuan.hspot.Entity.Conversation;

import io.dropwizard.hibernate.AbstractDAO;

public class ConversationDAO extends AbstractDAO<Conversation>{

	public ConversationDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
	public Conversation create(Conversation conversation){
		return persist(conversation);
	}
	
	public Conversation findById(int id){
		return get(id);
	}
	
	public List<Conversation> findAll(){
		return list(namedQuery("Conversation.findAll"));
	}
	
	public List<Conversation> findConvoByUserId(int userId){
		Criteria criteria = currentSession().createCriteria(Conversation.class);
		criteria = criteria.add(Restrictions.or(Restrictions.eq("userOne.userID",userId ),Restrictions.eq("userTwo.userID", userId)));
		List<Conversation> conversations = criteria.list();
		return conversations;
	}
}
