package com.yuan.hspot.DAOTest;

import org.hibernate.Query;
import org.junit.Before;
import org.junit.Test;

import com.yuan.hspot.DAO.ConversationDAO;
import com.yuan.hspot.DAO.MessageDAO;
import com.yuan.hspot.DAO.ReviewDAO;
import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.Conversation;
import com.yuan.hspot.Entity.Message;
import com.yuan.hspot.Entity.Review;
import com.yuan.hspot.Entity.UserDetails;

import junit.framework.Assert;

public class UserDAOTest extends DAOTests {
	private UserDAO userDAO;
	private MessageDAO messageDAO;
	private ReviewDAO reviewDAO;
	private ConversationDAO conversationDAO;

	@Before
	public void initialize() {
		userDAO = new UserDAO(sessionFactory);
   
		// Delete all the old junk...
		getSession().beginTransaction();
		Query q = getSession().createQuery("delete from UserDetails");
		q.executeUpdate();
		
		//create user
		userDAO = new UserDAO(sessionFactory);
		UserDetails userOne = new UserDetails();
		userOne.setEmail("user1@email.example.com");
		userOne.setPassword("password");
		userDAO.create(userOne);
		
		UserDetails userTwo = new UserDetails();
		userTwo.setEmail("user2@email.example.com");
		userTwo.setPassword("password");
		userDAO.create(userTwo);
		
		//create conversation
		conversationDAO = new ConversationDAO(sessionFactory);
		Conversation conversation = new Conversation();
		conversation.setUserOne(userOne);
		conversation.setUserTwo(userTwo);
		conversationDAO.create(conversation);
		
		//create conversation
		messageDAO = new MessageDAO(sessionFactory);
		Message message = new Message();
		message.setConversation(conversation);
		message.setMessageContent("hey");
		message.setUserDetails(userOne);
		messageDAO.create(message);
		
		//create review
		reviewDAO = new ReviewDAO(sessionFactory);
		Review review = new Review();
		review.setReviewContent("good guy");
		review.setReviewGiver(userOne);
		review.setReviewReceiver(userTwo);
		reviewDAO.create(review);
		getSession().getTransaction().commit();
	}
	
	@Test
	public void finaAllTest(){
		getSession().beginTransaction();
		userDAO = new UserDAO(sessionFactory);
		conversationDAO = new ConversationDAO(sessionFactory);
		messageDAO = new MessageDAO(sessionFactory);
		reviewDAO = new ReviewDAO(sessionFactory);
		Assert.assertEquals(2,userDAO.findAll().size());
		Assert.assertEquals(1,messageDAO.findAll().size());
		Assert.assertEquals(1,conversationDAO.findAll().size());
		Assert.assertEquals(1,reviewDAO.findAll().size());
		getSession().getTransaction().commit();
	}

}
