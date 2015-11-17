package com.yuan.hspot.Entity;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

@Entity
@NamedQueries({
@NamedQuery(name="UserDetails.findAll", query="from UserDetails"),
@NamedQuery(name="UserDetails.deleteAll", query="delete from UserDetails"),
@NamedQuery(name="UserDetails.accessToConvo", query="from UserDetails u, Conversation c where"
		+ "(u.userID = c.userOne or u.userID = c.userTwo) and c.conversationID = :convoId and u.userID = :userId"),
@NamedQuery(name="UserDetails.accessToMsg", query="from UserDetails u, Message m where "
		+ "u.userID = m.userDetails  and m.messageID = :msgId and u.userID = :userId")
})
public class UserDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userID;
	@Column(unique=true)
	private String email;
	@Column(nullable=false)
	private String password;
	private String firstName;
	private String lastName;
	private String role;
	@ElementCollection
	private Collection<String> skills = new ArrayList<String>();
	
	@OneToMany(mappedBy="reviewReceiver")
	private Collection<Review> reviewReceived = new ArrayList<Review>();
	@OneToMany(mappedBy="reviewGiver")
	private Collection<Review> reviewGiven = new ArrayList<Review>();
	@OneToMany(mappedBy="userOne")
	private Collection<Conversation> userOneConversations = new ArrayList<Conversation>();
	@OneToMany(mappedBy="userTwo")
	private Collection<Conversation> userTwoConversations = new ArrayList<Conversation>();
	@OneToMany(mappedBy="userDetails")
	private Collection<Message> messages = new ArrayList<Message>();
	
	
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Collection<String> getSkills() {
		return skills;
	}
	public void setSkills(Collection<String> skills) {
		this.skills = skills;
	}
	public Collection<Review> getReviewReceived() {
		return reviewReceived;
	}
	public void setReviewReceived(Collection<Review> reviewReceived) {
		this.reviewReceived = reviewReceived;
	}
	public Collection<Review> getReviewGiven() {
		return reviewGiven;
	}
	public void setReviewGiven(Collection<Review> reviewGiven) {
		this.reviewGiven = reviewGiven;
	}
	public Collection<Conversation> getUserOneConversations() {
		return userOneConversations;
	}
	public void setUserOneConversations(Collection<Conversation> userOneConversations) {
		this.userOneConversations = userOneConversations;
	}
	public Collection<Conversation> getUserTwoConversations() {
		return userTwoConversations;
	}
	public void setUserTwoConversations(Collection<Conversation> userTwoConversations) {
		this.userTwoConversations = userTwoConversations;
	}
	public Collection<Message> getMessages() {
		return messages;
	}
	public void setMessages(Collection<Message> messages) {
		this.messages = messages;
	}
	
	

}
