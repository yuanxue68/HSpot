package com.yuan.hspot;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.yuan.hspot.DAO.ConversationDAO;
import com.yuan.hspot.DAO.MessageDAO;
import com.yuan.hspot.DAO.ReviewDAO;
import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.Conversation;
import com.yuan.hspot.Entity.Message;
import com.yuan.hspot.Entity.Review;
import com.yuan.hspot.Entity.UserDetails;
import com.yuan.hspot.Resource.ConversationResource;
import com.yuan.hspot.Resource.MessageResource;
import com.yuan.hspot.Resource.ReviewResource;
import com.yuan.hspot.Resource.UserResource;

import io.dropwizard.Application;
import io.dropwizard.auth.AuthDynamicFeature;
import io.dropwizard.auth.AuthValueFactoryProvider;
import io.dropwizard.auth.basic.BasicCredentialAuthFilter;
import io.dropwizard.db.DataSourceFactory;
import io.dropwizard.hibernate.HibernateBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

/**
 * Hello world!
 *
 */
public class App extends Application<HspotConfiguration>
{
	public static final Logger LOGGER = LoggerFactory.getLogger(App.class);
	private final HibernateBundle<HspotConfiguration> hibernate = new HibernateBundle<HspotConfiguration>(UserDetails.class,Conversation.class,Message.class,Review.class){
		@Override
		public DataSourceFactory getDataSourceFactory(HspotConfiguration configuration){
			return configuration.getDatabase();
		}
	};
	
	@Override
	public void initialize(Bootstrap<HspotConfiguration> bootstrap){
		bootstrap.addBundle(hibernate);
	}
    public static void main( String[] args ) throws Exception
    {
        new App().run(args);
    }

	@Override
	public void run(HspotConfiguration configuration, Environment environment) throws Exception {
		LOGGER.info("Method App#run called");
		final UserDAO userDAO = new UserDAO(hibernate.getSessionFactory());
		final ConversationDAO conversationDAO = new ConversationDAO(hibernate.getSessionFactory());
		final MessageDAO messageDAO = new MessageDAO(hibernate.getSessionFactory());
		final ReviewDAO reviewDAO = new ReviewDAO(hibernate.getSessionFactory());
		
		environment.jersey().register(new AuthDynamicFeature(new BasicCredentialAuthFilter.
				Builder<User>()
				.setAuthenticator(new BasicAuthenticator(userDAO,hibernate.getSessionFactory()))
				.buildAuthFilter()));
		
		environment.jersey().register(new AuthValueFactoryProvider.Binder<>(User.class));
		environment.jersey().register(new UserResource(userDAO));
		environment.jersey().register(new MessageResource(messageDAO, userDAO));
		environment.jersey().register(new ReviewResource(reviewDAO, userDAO));
		environment.jersey().register(new ConversationResource(conversationDAO));
		
	}
}
