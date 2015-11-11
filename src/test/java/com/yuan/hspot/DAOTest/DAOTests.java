package com.yuan.hspot.DAOTest;

import org.hibernate.Session;
import org.hibernate.SessionException;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import com.yuan.hspot.Entity.Conversation;
import com.yuan.hspot.Entity.Message;
import com.yuan.hspot.Entity.Review;
import com.yuan.hspot.Entity.UserDetails;


public class DAOTests {
    SessionFactory sessionFactory;

    public DAOTests() {
        Configuration config=new Configuration();
        config.setProperty("hibernate.connection.url","jdbc:postgresql://127.0.0.1:5432/hspottest");
        config.setProperty("hibernate.connection.username","postgres");
        config.setProperty("hibernate.connection.password","1234");
        config.setProperty("hibernate.connection.driver_class","org.postgresql.Driver");
        config.setProperty("hibernate.current_session_context_class", "thread");
        config.setProperty("hibernate.show_sql", "false");
        config.setProperty("hibernate.hbm2ddl.auto", "create");
        config.addAnnotatedClass(UserDetails.class);
        config.addAnnotatedClass(Message.class);
        config.addAnnotatedClass(Review.class);
        config.addAnnotatedClass(Conversation.class);

        ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(config.getProperties()).build();
	    sessionFactory = config.buildSessionFactory(serviceRegistry);
    }

    public Session getSession()
    {
        Session session;

        try {
            session = sessionFactory.getCurrentSession();
        } catch (SessionException se) {
            session = sessionFactory.openSession();
        }

        return session;
    }
}
