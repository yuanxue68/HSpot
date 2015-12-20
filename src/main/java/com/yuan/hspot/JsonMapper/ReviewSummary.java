package com.yuan.hspot.JsonMapper;

/**
 * Created by yuanxue on 2015-12-17.
 */
public class ReviewSummary {
    private String reviewContent;
    private int reviewGiverID;
    private int stars;

    public ReviewSummary(String reviewContent, int reviewGiverID, int stars){
        this.reviewContent = reviewContent;
        this.reviewGiverID = reviewGiverID;
        this.stars = stars;
    }

    public String getReviewContent() {
        return reviewContent;
    }

    public void setReviewContent(String reviewContent) {
        this.reviewContent = reviewContent;
    }

    public int getReviewGiverID() {
        return reviewGiverID;
    }

    public void setReviewGiverID(int reviewGiverID) {
        this.reviewGiverID = reviewGiverID;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }
}
