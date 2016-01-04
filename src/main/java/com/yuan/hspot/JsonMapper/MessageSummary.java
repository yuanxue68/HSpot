package com.yuan.hspot.JsonMapper;

import java.util.Date;

/**
 * Created by yuanxue on 2016-01-03.
 */
public class MessageSummary {
    private String title;
    private int sender;
    private Date created;
    private String userEmail;

    public MessageSummary(){

    }

    public MessageSummary(String title, int sender, String userEmail, Date created){
        this.title = title;
        this.sender = sender;
        this.created = created;
        this.userEmail = userEmail;
    }
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getSender() {
        return sender;
    }

    public void setSender(int sender) {
        this.sender = sender;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
}
