package com.yuan.hspot.DAO;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.yuan.hspot.Entity.UserDetails;
import com.yuan.hspot.JsonMapper.MessageSummary;
import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import com.yuan.hspot.Auth.User;
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
	
	public List<MessageSummary> findMessageByUserId(int userId, String type){
		Criteria criteria = currentSession().createCriteria(Message.class);
		//criteria = criteria.add(Restrictions.eq("conversation.conversationID", convoId));
		if(type.equals("sent")){
            criteria = criteria.add(Restrictions.eq("sender",new UserDetails(userId)));
            criteria = criteria.addOrder(Order.desc("created"));
            criteria = criteria.setFirstResult(0);
            criteria = criteria.setMaxResults(10);
            List<Message> messages = criteria.list();
            List<MessageSummary> messageSummaries = new ArrayList<MessageSummary>();
            for(Message message:messages){
                messageSummaries.add(new MessageSummary(
                        message.getTitle(),
                        message.getReceiver().getUserID(),
                        message.getReceiver().getEmail(),
                        message.getCreated()
                ));
            }
            return messageSummaries;
		} else {
			criteria = criteria.add(Restrictions.eq("receiver",new UserDetails(userId)));
            criteria = criteria.addOrder(Order.desc("created"));
            criteria = criteria.setFirstResult(0);
            criteria = criteria.setMaxResults(10);
            List<Message> messages = criteria.list();
            List<MessageSummary> messageSummaries = new ArrayList<MessageSummary>();
            for(Message message:messages){
                messageSummaries.add(new MessageSummary(
                        message.getTitle(),
                        message.getSender().getUserID(),
                        message.getSender().getEmail(),
                        message.getCreated()
                ));
            }
            return messageSummaries;
		}
	}
	
	public int deleteMessageById(int msgId){
		int numDeleted = currentSession().getNamedQuery("Message.deleteById").setInteger("msgId", msgId).executeUpdate();
		return numDeleted;
	}

}
