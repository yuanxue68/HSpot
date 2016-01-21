package com.yuan.hspot.DAOTest;

import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;

import com.yuan.hspot.Entity.*;
import org.hibernate.Query;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.yuan.hspot.DAO.MessageDAO;
import com.yuan.hspot.DAO.ReviewDAO;
import com.yuan.hspot.DAO.UserDAO;


public class UserDAOTest extends DAOTests {
	private UserDAO userDAO;
	private MessageDAO messageDAO;
	private ReviewDAO reviewDAO;

	@Before
	public void setUp() throws NoSuchAlgorithmException {
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
			messageDAO = new MessageDAO(sessionFactory);
			reviewDAO = new ReviewDAO(sessionFactory);
			Assert.assertEquals(2,userDAO.findAll().size());
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
