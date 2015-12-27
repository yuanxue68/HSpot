package com.yuan.hspot.DAOTest;

import java.util.ArrayList;

import com.yuan.hspot.Entity.*;
import org.hibernate.Query;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.yuan.hspot.DAO.ConversationDAO;
import com.yuan.hspot.DAO.MessageDAO;
import com.yuan.hspot.DAO.ReviewDAO;
import com.yuan.hspot.DAO.UserDAO;


public class UserDAOTest extends DAOTests {
	private UserDAO userDAO;
	private MessageDAO messageDAO;
	private ReviewDAO reviewDAO;
	private ConversationDAO conversationDAO;

	@Before
	public void setUp() {
		// Delete all the old junk...
		getSession().beginTransaction();
		Query q = getSession().createQuery("delete from UserDetails");
		q.executeUpdate();
		
		//create user
		userDAO = new UserDAO(sessionFactory);
		UserDetails userOne = new UserDetails();
		userOne.setEmail("user1@email.example.com");
		userOne.setPassword("password");
		ArrayList<Skill> skills = new ArrayList<Skill>();
		Skill ruby =  new Skill();
		Skill python =  new Skill();
		ruby.setSkillName("ruby");
		python.setSkillName("python");
		skills.add(ruby);
		skills.add(python);
		userOne.setSkills(skills);
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
	
	@After
	public void tearDown(){
		getSession().close();
	}
	
	@Test
	public void testFindAll(){
		try{
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
		} finally{
			getSession().close();
		}
	}
	/*
	@Test
	public void testFilterUser(){
		try{
			getSession().beginTransaction();
			userDAO = new UserDAO(sessionFactory);
			ArrayList<String> skills = new ArrayList<String>();
			skills.add("Python");
			skills.add("Ruby");
			Assert.assertEquals(1,userDAO.filterUsers(skills, null,null).size());
			getSession().getTransaction().commit();		
		} finally {
			getSession().close();
		}
	}*/

}
