package com.yuan.hspot.Entity;

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
	@NamedQuery(name="Review.findAll",query="from Review")
})
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reviewID;
	//person who wrote the review
	@ManyToOne
	private UserDetails reviewReceiver;
	//person who received the review
	@ManyToOne
	private UserDetails reviewGiver;
	@Column(nullable=false)
	private int star;
	@Column(nullable=false)
	private String reviewContent;
	
	public int getReviewID() {
		return reviewID;
	}
	public void setReviewID(int reviewID) {
		this.reviewID = reviewID;
	}
	public UserDetails getReviewReceiver() {
		return reviewReceiver;
	}
	public void setReviewReceiver(UserDetails reviewReceiver) {
		this.reviewReceiver = reviewReceiver;
	}
	public UserDetails getReviewGiver() {
		return reviewGiver;
	}
	public void setReviewGiver(UserDetails reviewGiver) {
		this.reviewGiver = reviewGiver;
	}
	public int getStar() {
		return star;
	}
	public void setStar(int star) {
		this.star = star;
	}
	public String getReviewContent() {
		return reviewContent;
	}
	public void setReviewContent(String reviewContent) {
		this.reviewContent = reviewContent;
	}
	
	
	
}
