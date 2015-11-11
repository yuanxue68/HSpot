package com.yuan.hspot;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.Conversation;
import com.yuan.hspot.Entity.Message;
import com.yuan.hspot.Entity.Review;
import com.yuan.hspot.Entity.UserDetails;
import com.yuan.hspot.Resource.UserResource;

import io.dropwizard.Application;
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
		environment.jersey().register(new UserResource(userDAO));
		
	}
}
