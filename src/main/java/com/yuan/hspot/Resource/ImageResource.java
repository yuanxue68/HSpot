package com.yuan.hspot.Resource;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.io.File;

/**
 * Created by yuanxue on 2015-12-30.
 */
@Path("/images")
@Produces({"image/png","image/jpeg"})
public class ImageResource {
    @GET
    @Path("/profile/{id}/")
    public Response getProfilePic(@PathParam("id") String id){
        File file = new File("images/profile_pic/"+id+".png");
        if(!file.exists()){
            return Response.ok("images/profile_pic/default.png").build();
        }
        return Response.ok(file).build();
    }

    @GET
    @Path("/thumbnail/{id}/")
    public Response getThumbnail(@PathParam("id") String id){
        File file = new File("images/thumbnail/"+id+".png");
        if(!file.exists()){
            return Response.ok("images/thumbnail/default.png").build();
        }
        return Response.ok(file).build();
    }
}
