package com.yuan.hspot.Entity;

import javax.persistence.Embeddable;

@Embeddable
public class Skill {
	private String skill;
	
	public Skill(){
		this.skill=null;
	}
	public Skill(String skill){
		this.skill=skill;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}
	
}
