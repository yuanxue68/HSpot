package com.yuan.hspot;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.context.internal.ManagedSessionContext;

import com.google.common.base.Optional;
import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.UserDetails;

import io.dropwizard.auth.AuthenticationException;
import io.dropwizard.auth.Authenticator;
import io.dropwizard.auth.basic.BasicCredentials;

public class BasicAuthenticator implements Authenticator<BasicCredentials, User>{
	private UserDAO userDAO;
	private SessionFactory sessionFactory;
	
	public BasicAuthenticator(UserDAO userDAO, SessionFactory sessionFactory){
		this.userDAO = userDAO;
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public Optional<User> authenticate(BasicCredentials credentials) throws AuthenticationException {
		String username = credentials.getUsername();
		String password = credentials.getPassword();
		
		Session session = sessionFactory.openSession();
        try {
            ManagedSessionContext.bind(session);
            Transaction transaction = session.beginTransaction();
            try {
            	List<UserDetails> userDetails = userDAO.findByEmail(username);
            	if(userDetails.size()!=1){
                    transaction.commit();
        			return Optional.absent();
        		}
        		if (userDetails.get(0).getPassword().equals(password)) {
                    transaction.commit();
        			return Optional.of(new User(userDetails.get(0).getUserID(),username));
        		}
                transaction.commit();
        		return Optional.absent();
            }
            catch (Exception e) {
                transaction.rollback();
                throw new RuntimeException(e);
            }
        } finally {
            session.close();
            ManagedSessionContext.unbind(sessionFactory);
        }
		
	}

}
