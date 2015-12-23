package com.yuan.hspot.Resource;

import java.io.*;
import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yuan.hspot.Auth.JWT;
import com.yuan.hspot.Auth.User;
import com.yuan.hspot.Constants.ResponseConstants;
import com.yuan.hspot.DAO.UserDAO;
import com.yuan.hspot.Entity.UserDetails;
import com.yuan.hspot.JsonMapper.Token;

import com.yuan.hspot.JsonMapper.UserSummary;
import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;
import org.glassfish.jersey.media.multipart.FormDataParam;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {
	private UserDAO userDAO;
	public UserResource(UserDAO userDAO) {
		this.userDAO = userDAO;
	}

	@GET
	@UnitOfWork
	public Response filterUsers(
			@QueryParam("skills") final List<String> skills,
			@QueryParam("role") final String role,
			@QueryParam("name") final String name){
		List<UserSummary> filteredUsers = userDAO.filterUsers(skills,role,name);
		return Response.ok(filteredUsers).build();
	}
	
	@GET
	@Path("/{id}")
	@UnitOfWork
	public Response getUserById(@PathParam("id") int id){
		UserSummary userDetails = userDAO.findById(id);
		return Response.ok(userDetails).build();
	}
	
	@PUT
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@UnitOfWork
	public Response editUser(@PathParam("id") int id, UserDetails userDetails, @Auth User user){
		if(id != user.getUserId()){
			return Response.status(Response.Status.UNAUTHORIZED).entity(ResponseConstants.USER_NO_EDIT_RIGHT).build();
		}
		userDetails.setUserID(user.getUserId());
		userDAO.update(userDetails);
		return Response.ok().build();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@UnitOfWork
	public Response createUser(UserDetails userDetails){
		if((userDetails.getEmail()!=null && userDetails.getEmail().isEmpty()) || (userDetails.getPassword()!=null && userDetails.getPassword().isEmpty())){
			return Response.status(Response.Status.BAD_REQUEST).entity(ResponseConstants.USER_MISSING_INFORMATION).build();
		}
		if(userDAO.findByEmail(userDetails.getEmail()).size()!=0){
			return Response.status(Response.Status.BAD_REQUEST).entity(ResponseConstants.USER_DUPLICATE_EMAIL).build();
		}
		UserDetails createdUser = userDAO.create(userDetails);
		Token token = new Token(JWT.createJWT(createdUser.getEmail(),TimeUnit.DAYS.toMillis(365)), createdUser.getUserID());
		return Response.ok().entity(token).build();
	}

    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Path("/profilepic")
    @UnitOfWork
    public Response uploadProfilePic(@FormDataParam("file") InputStream uploadedInputStream,@Auth User user)throws IOException{
        String fileDir = "ProfilePic/";
        String fileName = user.getUserId()+".png";
        writeToFile(uploadedInputStream, "ProfilePic", fileName);
        userDAO.updateProfilePic(fileDir+fileName,user.getUserId());
        return Response.ok().entity(fileDir+fileName).build();
    }

    private void writeToFile(InputStream inputStream, String fileDir, String fileName) throws IOException{
        int read;
        final int BUFFER_LENGTH = 1024;
        final byte[] buffer = new byte[BUFFER_LENGTH];
        File profileDir = new File(fileDir);
        profileDir.mkdir();
        File file = new File(fileDir, fileName);
        file.createNewFile();
        OutputStream outputStream = new FileOutputStream(file);
        while ((read = inputStream.read(buffer)) !=-1){
            outputStream.write(buffer, 0, read);
        }
        outputStream.flush();
        outputStream.close();
    }

}
