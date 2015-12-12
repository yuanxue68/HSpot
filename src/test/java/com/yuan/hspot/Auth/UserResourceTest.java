package com.yuan.hspot.Auth;

import static org.mockito.Matchers.anyObject;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.reset;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;

import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;
import org.glassfish.jersey.test.grizzly.GrizzlyWebTestContainerFactory;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.ClassRule;
import org.junit.Test;

import com.google.common.base.Optional;
import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.UserDetails;
import com.yuan.hspot.Resource.UserResource;

import io.dropwizard.auth.AuthDynamicFeature;
import io.dropwizard.auth.AuthValueFactoryProvider;
import io.dropwizard.auth.AuthenticationException;
import io.dropwizard.auth.Authenticator;
import io.dropwizard.auth.basic.BasicCredentialAuthFilter;
import io.dropwizard.auth.basic.BasicCredentials;
import io.dropwizard.testing.junit.ResourceTestRule;

public class UserResourceTest{
	private static final UserDAO DAO = mock(UserDAO.class);
	private static final Authenticator<BasicCredentials,User> AUTHENTICATOR =
			new Authenticator<BasicCredentials, User>(){

				@Override
				public Optional<User> authenticate(BasicCredentials credentials) throws AuthenticationException {
					return Optional.of(new User(1, "Yuan"));
				}
		
	};
	private static final BasicCredentialAuthFilter<User> BASIC_AUTH_HANDLER = 
			new BasicCredentialAuthFilter.Builder<User>()
			.setAuthenticator(AUTHENTICATOR)
			.setPrefix("Basic")
			.setRealm("SUPER SECRET STUFF")
			.buildAuthFilter();
	
	@ClassRule
	public static final ResourceTestRule RULE = ResourceTestRule.builder()
		.addResource(new UserResource(DAO))
		.addProvider(RolesAllowedDynamicFeature.class)
        .addProvider(new AuthDynamicFeature(BASIC_AUTH_HANDLER))
        .addProvider(new AuthValueFactoryProvider.Binder<>(User.class))
		.setTestContainerFactory(new GrizzlyWebTestContainerFactory())
		.build();
	private UserDetails user1;
	private UserDetails user2;
	
	@Before
	public void setUp(){
		user1 = new UserDetails();
		user1.setUserID(1);
		user1.setFirstName("yuan");
		user1.setPassword("yuan");
		
		user2 = new UserDetails();
		user2.setUserID(2);
		user2.setFirstName("changed");
		user2.setPassword("yuan");
	}
	
	@After
	public void tearDown(){
		reset(DAO);
	}
	
	@Test
	public void getUserSuccess(){
		when(DAO.findById(1)).thenReturn(user1);
		UserDetails found = RULE.getJerseyTest().target("/user/1").request().get(UserDetails.class);
		Assert.assertEquals(found.getUserID(), user1.getUserID());
        verify(DAO).findById(1);   
	}
	
	@Test
	public void editPersonWithAuth(){
		Entity<UserDetails> entity = Entity.entity(user2, MediaType.APPLICATION_JSON_TYPE);
		when(DAO.update(anyObject())).thenReturn(user2);
		UserDetails updated = RULE.getJerseyTest().target("/user/1").request().header(HttpHeaders.AUTHORIZATION, "Basic Z29vZC1ndXk6c2VjcmV0").put(entity,UserDetails.class);
		verify(DAO).update(anyObject());
		Assert.assertEquals("changed", updated.getFirstName());
		
	}
	/*
	@Test
	public void createUser(){
		Entity<UserDetails> entity = Entity.entity(user1, MediaType.APPLICATION_JSON_TYPE);
		when(DAO.create(anyObject())).thenReturn(user1);
		UserDetails created = RULE.getJerseyTest().target("/user").request().post(entity,UserDetails.class);
		verify(DAO).create(anyObject());
		Assert.assertEquals("yuan", created.getFirstName());
	}*/
}
