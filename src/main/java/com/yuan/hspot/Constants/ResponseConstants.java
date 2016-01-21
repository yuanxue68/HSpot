package com.yuan.hspot.Constants;

public class ResponseConstants {
	//review resource constants
	public static final String EMPTY_REVIEW = "Review can not be empty";
	public static final String REVIEW_NO_EDIT_RIGHT = "You do not have the right to edit this review";
	public static final String REVIEW_NO_DELETE_RIGHT = "You do not have the right to delete this review";
	public static final String REVIEW_CANT_REVIEW_YOURSELF = "You can not give review to yourself";
	
	//message resource constants
	public static final String MESSAGE_INVALID_TYPE = "Type can only be 'sent' or 'received'";
	public static final String MESSAGE_NO_VIEW_RIGHT = "You do not have the right to view this message";
	public static final String MESSAGE_NO_SUCH_USER = "You are trying to send message to a user that does not exist";
	public static final String MESSAGE_NOT_ENOUGH_INFORMATION = "the content of your message can not be empty";


	//user resource constants
	public static final String USER_NO_EDIT_RIGHT = "You do not have the right to edit this user";
	public static final String USER_MISSING_INFORMATION = "Password and email can not be empty";
	public static final String USER_DUPLICATE_EMAIL = "An user with this email has already been registered";
	public static final String FAILED_TO_UPLOAD_PROFILE_PIC= "Failed to upload profile picture";

}
