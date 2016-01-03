package com.yuan.hspot.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({
	@NamedQuery(name="Message.findAll",query="from Message"),
	@NamedQuery(name="Message.deleteById", query="delete from Message where messageId = :msgId")
})
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int messageID;
	@Column(nullable=false)
	private Date created = new Date();
	@Column(nullable=false)
	private String content;

	@ManyToOne
	private UserDetails sender;

	@ManyToOne
	private UserDetails receiver;

	public int getMessageID() {
		return messageID;
	}

	public void setMessageID(int messageID) {
		this.messageID = messageID;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public UserDetails getSender() {
		return sender;
	}

	public void setSender(UserDetails sender) {
		this.sender = sender;
	}

	public UserDetails getReceiver() {
		return receiver;
	}

	public void setReceiver(UserDetails receiver) {
		this.receiver = receiver;
	}
}
