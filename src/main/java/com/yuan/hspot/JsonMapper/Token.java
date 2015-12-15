package com.yuan.hspot.JsonMapper;

public class Token {
	
	private String token;
    private int userID;

    public Token(String token, int userID){
        this.token = token;
        this.userID = userID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
