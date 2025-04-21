package main

import "fmt"


func main()  {
	
	// defining the variable
	var name string = "glong";
	

	// shorthand 
	isBool := true;

	// define const
	const typeDef string = "yt";

	const (
		host="localhost"
		port = 4000
	)


	fmt.Println(isBool)
	fmt.Println(name)
	fmt.Println(typeDef)
	fmt.Println(host)
	fmt.Println(port)



}