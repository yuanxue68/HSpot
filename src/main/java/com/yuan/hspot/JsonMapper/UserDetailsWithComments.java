package com.yuan.hspot.JsonMapper;

import com.yuan.hspot.Entity.Review;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by yuanxue on 2015-12-17.
 */
public class UserDetailsWithComments {
    private String name;
    private String email;
    private String role;
    private Collection<String> skills = new ArrayList<String>();
    private Collection<Review> reviews = new ArrayList<Review>();

    public UserDetailsWithComments(String name, String email, String role, Collection<String> skills, Collection<Review> reviews){
        this.name = name == null ? "" : name;
        this.email = email == null ? "" : email;
        this.role = role == null ? "" : role;
        this.skills = skills;
        this.reviews = reviews;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public Collection<Review> getReviews() {
        return reviews;
    }

    public void setReviews(Collection<Review> rewview) {
        this.reviews = rewview;
    }
}
