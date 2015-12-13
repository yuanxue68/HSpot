package com.yuan.hspot.JsonMapper;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by yuanxue on 2015-12-13.
 */
public class UserSummary {
    private String name;
    private String email;
    private String role;
    private Collection<String> skills = new ArrayList<String>();

    public UserSummary(){

    }

    public UserSummary(String name, String email, String role, Collection<String> skills){
        this.name = name;
        this.email = email;
        this.role = role;
        this.skills = skills;
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
