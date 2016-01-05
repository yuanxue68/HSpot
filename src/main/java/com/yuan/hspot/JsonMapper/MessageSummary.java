package com.yuan.hspot.JsonMapper;

import java.util.Date;

/**
 * Created by yuanxue on 2016-01-03.
 */
public class MessageSummary {
    private int id;
    private String title;
    private int sender;
    private Date created;
    private String userEmail;

    public MessageSummary(){

    }

    public MessageSummary(int id, String title, int sender, String userEmail, Date created){
        this.id = id;
        this.title = title;
        this.sender = sender;
        this.created = created;
        this.userEmail = userEmail;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
