package com.yuan.hspot.Entity;

import javax.persistence.*;

/**
 * Created by yuanxue on 2015-12-22.
 */
@Entity
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int skillID;
    @ManyToOne
    private UserDetails userDetails;
    private String skillName;

    public int getSkillID() {
        return skillID;
    }

    public void setSkillID(int skillID) {
        this.skillID = skillID;
    }

    public UserDetails getUser() {
        return userDetails;
    }

    public void setUser(UserDetails user) {
        this.userDetails = user;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }
}
