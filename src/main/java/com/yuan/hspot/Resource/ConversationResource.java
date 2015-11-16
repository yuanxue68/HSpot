package com.yuan.hspot.Resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yuan.hspot.User;
import com.yuan.hspot.DAO.ConversationDAO;
import com.yuan.hspot.Entity.Conversation;

import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/conversation")
@Produces(MediaType.APPLICATION_JSON)
public class ConversationResource {
	private ConversationDAO conversationDAO;
	public ConversationResource(ConversationDAO conversationDAO){
		this.conversationDAO = conversationDAO;
	}
	@GET
	@UnitOfWork
	public Response getCurrentUserConvo(@Auth User user){
		List<Conversation> conversations = conversationDAO.findConvoByUserId(user.getUserId());
		return Response.ok(conversations).build();
	}
	
	@POST
	@UnitOfWork
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createConvo(@Auth User user, Conversation conversation){
		if (conversation.getUserOne().getUserID()!=user.getUserId())
			return Response.status(401).build();
		Conversation newConvo = conversationDAO.create(conversation);
		return Response.ok(newConvo).build();
	}
}
