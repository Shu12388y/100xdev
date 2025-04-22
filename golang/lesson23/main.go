// packages

// go mod init github.com/shub12388y/golang

package main

import (
	"github.com/shub12388y/golang/auth"
	"github.com/shub12388y/golang/user"
)




func main()  {
	
	user :=  user.User{
		Username: "shubham",
		Password: "!2345",
	}

	auth.LoginWithCredentials(user.Username,user.Password)

}