package com.yuan.hspot.Auth;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.reset;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;

import org.glassfish.jersey.test.grizzly.GrizzlyWebTestContainerFactory;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.ClassRule;
import org.junit.Test;

import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.UserDetails;
import com.yuan.hspot.Resource.UserResource;

import io.dropwizard.testing.junit.ResourceTestRule;

public class UserResourceTest{
	private static final UserDAO DAO = mock(UserDAO.class);
	@ClassRule
	public static final ResourceTestRule RULE = ResourceTestRule.builder()
		.addResource(new UserResource(DAO))
		.setTestContainerFactory(new GrizzlyWebTestContainerFactory())
		.build();
	private UserDetails user;
	
	@Before
	public void setUp(){
		user = new UserDetails();
		user.setUserID(1);
	}
	
	@After
	public void tearDown(){
		reset(DAO);
	}
	
	@Test
	public void getUserSuccess(){
		
		when(DAO.findById(1)).thenReturn(user);
		UserDetails found = RULE.getJerseyTest().target("/user/1").request().get(UserDetails.class);
		Assert.assertEquals(found.getUserID(), user.getUserID());
        verify(DAO).findById(1);
        
	}
	
	@Test
	public void getPersonNotFound(){
		
	}
}
