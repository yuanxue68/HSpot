package com.yuan.hspot.DAO;

import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

import com.yuan.hspot.User;
import com.yuan.hspot.Entity.Message;

import io.dropwizard.hibernate.AbstractDAO;

public class MessageDAO extends AbstractDAO<Message>{

	public MessageDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
	public Message findById(int id){
		return get(id);
	}
	
	public Message create(Message message){
		message.setCreated(new Date());
		return persist(message);
	}
	
	public List<Message> findAll(){
		return list(namedQuery("Message.findAll"));
	}
	
	public List<Message> findMessageByConvoId(int convoId, User user){
		Criteria criteria = currentSession().createCriteria(Message.class);
		criteria = criteria.add(Restrictions.eq("conversation", convoId));
		List<Message> messages = criteria.list();
		return messages;
	}
	
	public int deleteMessageById(int msgId, User user){
		int numDeleted = currentSession().getNamedQuery("Message.deleteById").setInteger("msgId", msgId).executeUpdate();
		return numDeleted;
	}

}
