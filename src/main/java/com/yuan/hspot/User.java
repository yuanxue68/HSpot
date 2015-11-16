package com.yuan.hspot;

import java.security.Principal;

public class User implements Principal{
	private final String name;
	private final int userId;
	
	public User(int userId, String name){
		this.name = name;
		this.userId = userId;
	}

	@Override
	public String getName() {
		return name;
	}
	
	public int getUserId() {
		return userId;
	}
}
