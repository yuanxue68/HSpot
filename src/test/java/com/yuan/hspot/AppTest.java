package com.yuan.hspot;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import com.yuan.hspot.DAOTest.UserDAOTest;

@RunWith(Suite.class)
@Suite.SuiteClasses({
  UserDAOTest.class,
 // AuthenticationTest.class
})
public class AppTest {

}