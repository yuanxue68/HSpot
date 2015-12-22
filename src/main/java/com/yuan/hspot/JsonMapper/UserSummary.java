package com.yuan.hspot.JsonMapper;

import com.yuan.hspot.Entity.Skill;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by yuanxue on 2015-12-13.
 */
public class UserSummary {
    private int userID;
    private String name;
    private String email;
    private String role;
    private Collection<String> skills = new ArrayList<String>();

    public UserSummary(){

    }

    public UserSummary(int userID, String name, String email, String role, Collection<Skill> skills){
        this.userID = userID;
        this.name = name == null ? "" : name;
        this.email = email == null ? "" : email;
        this.role = role == null ? "" : role;
        for(Skill skill:skills){
            this.skills.add(skill.getSkillName());
        }
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
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

}
