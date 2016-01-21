package com.yuan.hspot.Auth;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
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
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;

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
        		try {
        			Claims claim = JWT.verifyJWT(password);
        			List<UserDetails> userDetails = userDAO.findByEmail(claim.getId());
        			return Optional.of(new User(userDetails.get(0).getUserID(),username));
        		} catch (Exception e){
                	List<UserDetails> userDetails = userDAO.findByEmail(username);
                	if(userDetails.size()!=1){
                        transaction.commit();
            			return Optional.absent();
            		}
                    try {
                        MessageDigest md = MessageDigest.getInstance("MD5");
                        byte[] passBytes = credentials.getPassword().getBytes();
                        md.reset();
                        byte[] digested = md.digest(passBytes);
                        StringBuffer sb = new StringBuffer();
                        for(int i=0;i<digested.length;i++) {
                            sb.append(Integer.toHexString(0xff & digested[i]));
                        }
                        password = sb.toString();

                        if (userDetails.get(0).getPassword().equals(password)) {
                            transaction.commit();
                            return Optional.of(new User(userDetails.get(0).getUserID(),username));
                        }
                    } catch (NoSuchAlgorithmException noAlgoEx){

                    }
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
