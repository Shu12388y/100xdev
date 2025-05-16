package main

import "fmt"


func foo()int{

	return -1;

}


func main()  {
	if v:= foo(); v == 0{
		fmt.Println("Zero")
	}else if v == 1{
			fmt.Println("One")
	}else{
		fmt.Println("None")
	}


}