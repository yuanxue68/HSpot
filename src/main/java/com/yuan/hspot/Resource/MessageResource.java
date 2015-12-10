package com.yuan.hspot.Resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yuan.hspot.Auth.User;
import com.yuan.hspot.Constants.ResponseConstants;
import com.yuan.hspot.DAO.MessageDAO;
import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.Message;

import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/conversation/{convoId}/message/")
@Produces(MediaType.APPLICATION_JSON)
public class MessageResource {
	private MessageDAO messageDAO;
	private UserDAO userDAO;
	
	public MessageResource(MessageDAO messageDAO, UserDAO userDAO){
		this.messageDAO = messageDAO;
		this.userDAO = userDAO;
	}
	
	@GET
	@Path("/")
	@UnitOfWork
	public Response getConvoById(@PathParam("convoId") int convoId,@Auth User user){
		if(userDAO.authToConvo(user, convoId).size()<1) {
			return Response.status(Response.Status.UNAUTHORIZED).entity(ResponseConstants.MESSAGE_NO_VIEW_RIGHT).build();
		}
		userDAO.authToConvo(user, convoId);
		List<Message> messages = messageDAO.findMessageByConvoId(convoId, user);
		return Response.ok(messages).build();
	}
	
	
	@POST
	@Path("/")
	@UnitOfWork
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createNewMessage(@PathParam("convoId") int convoId, @Auth User user, Message message){
		if(userDAO.authToConvo(user, convoId).size()<1) {
			return Response.status(Response.Status.UNAUTHORIZED).entity(ResponseConstants.MESSAGE_NO_CREATION_RIGHT).build();
		}
		Message newMessage = messageDAO.create(message);
		return Response.ok(newMessage).build();
	}
	
	@DELETE
	@Path("/{msgId}")
	@UnitOfWork
	public Response deleteMessage(@PathParam("convoId") int convoId,@PathParam("msgId") int msgId, @Auth User user){
		if(userDAO.authToMsg(user, msgId).size()<1) {
			return Response.status(Response.Status.UNAUTHORIZED).entity(ResponseConstants.MESSAGE_NO_DELETE_RIGHT).build();
		}
		int numDeleted = messageDAO.deleteMessageById(msgId);
		return Response.ok(numDeleted).build();
	}

}
