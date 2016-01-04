package com.yuan.hspot.Resource;

import java.util.List;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yuan.hspot.Auth.User;
import com.yuan.hspot.Constants.ResponseConstants;
import com.yuan.hspot.DAO.MessageDAO;
import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.Message;

import com.yuan.hspot.Entity.UserDetails;
import com.yuan.hspot.JsonMapper.MessageSummary;
import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/user/{userId}/messages/")
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
	public Response getConvoById(@PathParam("userId") int userId,@QueryParam("type") String type, @Auth User user){
		if(user.getUserId() != userId) {
			return Response.status(Response.Status.UNAUTHORIZED).entity(ResponseConstants.MESSAGE_NO_VIEW_RIGHT).build();
		}
		if(type.equals("sent") && type.equals("received")){
			return Response.status(Response.Status.BAD_REQUEST).entity(ResponseConstants.MESSAGE_INVALID_TYPE).build();
		}
		List<MessageSummary> messages = messageDAO.findMessageByUserId(user.getUserId(), type);
		return Response.ok(messages).build();
	}
	
	
	@POST
	@Path("/")
	@UnitOfWork
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createNewMessage(@PathParam("userId") int userId, @Auth User user, Message message){
		message.setSender(new UserDetails(user.getUserId()));
		message.setReceiver(new UserDetails(userId));
		Message newMessage = messageDAO.create(message);
		return Response.ok(newMessage).build();
	}
	/*
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
	*/
}
