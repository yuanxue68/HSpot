package com.yuan.hspot.Resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yuan.hspot.User;
import com.yuan.hspot.DAO.MessageDAO;
import com.yuan.hspot.Entity.Message;

import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/conversation/{convoId}/message/")
@Produces(MediaType.APPLICATION_JSON)
public class MessageResource {
	private MessageDAO messageDAO;
	
	public MessageResource(MessageDAO messageDAO){
		this.messageDAO = messageDAO;
	}
	
	@GET
	@Path("/")
	@UnitOfWork
	public Response getConvoById(@PathParam("convoId") int convoId,@Auth User user){
		//todo: need to check authorization 
		messageDAO.findMessageByConvoId(convoId, user);
		return Response.noContent().build();
	}
	
	
	@POST
	@Path("/")
	@UnitOfWork
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createNewMessage(@PathParam("convoId") int convoId, @Auth User user, Message message){
		//todo: need to check authorization 
		Message newMessage = messageDAO.create(message);
		return Response.ok(newMessage).build();
	}
	
	@DELETE
	@Path("/{msgId}")
	@UnitOfWork
	public Response deleteMessage(@PathParam("convoId") int convoId,@PathParam("msgId") int msgId, @Auth User user){
		//todo: need to check authorization 
		return Response.noContent().build();
	}

}
