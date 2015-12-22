package com.yuan.hspot.JsonMapper;

/**
 * Created by yuanxue on 2015-12-17.
 */
public class ReviewSummary {
    private int reviewId;
    private String reviewContent;
    private int stars;
    private int reviewGiverID;
    private String reviewGiverThumbNailUrl;

    public ReviewSummary(int reviewId, String reviewContent, int reviewGiverID, String reviewGiverThumbNailUrl, int stars){
        this.reviewId = reviewId;
        this.reviewContent = reviewContent;
        this.reviewGiverID = reviewGiverID;
        this.reviewGiverThumbNailUrl = reviewGiverThumbNailUrl;
        this.stars = stars;

    }

    public String getReviewGiverThumbNailUrl() {
        return reviewGiverThumbNailUrl;
    }

    public void setReviewGiverThumbNailUrl(String reviewGiverThumbNailUrl) {
        this.reviewGiverThumbNailUrl = reviewGiverThumbNailUrl;
    }

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
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
