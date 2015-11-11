package com.yuan.hspot.DAO;

import java.util.Date;
import java.util.List;

import org.hibernate.SessionFactory;

import com.yuan.hspot.Entity.Message;

import io.dropwizard.hibernate.AbstractDAO;

public class MessageDAO extends AbstractDAO<Message>{

	public MessageDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
	public Message findById(int id){
		return get(id);
	}
	
	public int create(Message message){
		message.setCreated(new Date());
		return persist(message).getMessageID();
	}
	
	public List<Message> findAll(){
		return list(namedQuery("Message.findAll"));
	}

}
