package com.yuan.hspot.Entity;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

@Entity
@NamedQueries({
	@NamedQuery(name="Conversation.findAll", query="from Conversation")
})
public class Conversation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int conversationID;

	@ManyToOne
	private UserDetails userOne;
	@ManyToOne
	private UserDetails userTwo;
	@OneToMany(mappedBy="conversation")
	private Collection<Message> messages = new ArrayList<Message>();
	
	
	public int getConversationID() {
		return conversationID;
	}
	public void setConversationID(int conversationID) {
		this.conversationID = conversationID;
	}
	public UserDetails getUserOne() {
		return userOne;
	}
	public void setUserOne(UserDetails userOne) {
		this.userOne = userOne;
	}
	public UserDetails getUserTwo() {
		return userTwo;
	}
	public void setUserTwo(UserDetails userTwo) {
		this.userTwo = userTwo;
	}
	public Collection<Message> getMessages() {
		return messages;
	}
	public void setMessages(Collection<Message> messages) {
		this.messages = messages;
	}
	
}
