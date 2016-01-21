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

@Path("/messages/")
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
	public Response getMessages(@QueryParam("type") String type, @QueryParam("page") int page, @QueryParam("searchString") String searchString, @Auth User user){
		if(type.equals("sent") && type.equals("received")){
			return Response.status(Response.Status.BAD_REQUEST).entity(ResponseConstants.MESSAGE_INVALID_TYPE).build();
		}
		List<MessageSummary> messages = messageDAO.findMessageByUserId(user.getUserId(), type, page, searchString);
		return Response.ok(messages).build();
	}

    @GET
    @Path("/{id}")
    @UnitOfWork
    public Response getMessagesById(@PathParam("id") int messageId, @Auth User user){
        Message message = messageDAO.findById(messageId);
        if(user.getUserId() != message.getReceiver().getUserID() && user.getUserId() != message.getSender().getUserID()) {
            return Response.status(Response.Status.UNAUTHORIZED).entity(ResponseConstants.MESSAGE_NO_VIEW_RIGHT).build();
        }
        return Response.ok(message).build();
    }
	
	@POST
	@Path("/")
	@UnitOfWork
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createNewMessage(@Auth User user, Message message){
        if(message.getContent().isEmpty() || message.getTitle().isEmpty()){
            return Response.status(Response.Status.BAD_REQUEST).entity(ResponseConstants.MESSAGE_NOT_ENOUGH_INFORMATION).build();
        }
        if(userDAO.findById(message.getReceiver().getUserID())==null){
            return Response.status(Response.Status.BAD_REQUEST).entity(ResponseConstants.MESSAGE_NO_SUCH_USER).build();

        }

		message.setSender(new UserDetails(user.getUserId()));
		Message newMessage = messageDAO.create(message);
		return Response.ok(newMessage).build();
	}
}
