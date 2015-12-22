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

import org.hibernate.annotations.NaturalId;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@NamedQueries({
@NamedQuery(name="UserDetails.findAll", query="from UserDetails"),
@NamedQuery(name="UserDetails.deleteAll", query="delete from UserDetails"),
@NamedQuery(name="UserDetails.accessToConvo", query="from UserDetails u, Conversation c where"
		+ "(u.userID = c.userOne or u.userID = c.userTwo) and c.conversationID = :convoId and u.userID = :userId"),
@NamedQuery(name="UserDetails.accessToMsg", query="from UserDetails u, Message m where "
		+ "u.userID = m.userDetails  and m.messageID = :msgId and u.userID = :userId"),
@NamedQuery(name="UserDetails.accessToEditReview", query="from UserDetails u, Review r where "
		+ "u.userID = r.reviewGiver  and r.reviewID = :reviewId and u.userID = :userId"),
@NamedQuery(name="UserDetails.findById", query="select distinct u from UserDetails u where u.userID = :userID"),
@NamedQuery(name="UserDetails.updateProfilePic", query="update UserDetails set profilePicPath = :filePath where userID = :userID")
})

public class UserDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userID;
	
	@NaturalId
	@Column(unique=true)
	private String email;
	
	@Column(nullable=false)
	private String password;
	
	private String name;
	
	private String role;

    private String profilePicPath = "/profile/default.png";

    @OneToMany(mappedBy="userDetails")
	private Collection<Skill> skills = new ArrayList<Skill>();
	
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
	
	public UserDetails(int id){
		this.userID=id;
	}
	
	public UserDetails() {
	
	}

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
	
	@JsonIgnore
	public String getPassword() {
		return password;
	}
	@JsonProperty
	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


    public String getProfilePicPath() {
        return profilePicPath;
    }

    public void setProfilePicPath(String profilePicPath) {
        this.profilePicPath = profilePicPath;
    }
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}

	public Collection<Skill> getSkills() {
		return skills;
	}

	public void setSkills(Collection<Skill> skills) {
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
