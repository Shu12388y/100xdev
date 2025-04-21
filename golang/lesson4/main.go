package main

import "fmt"

// if  else
func main() {
	age := 10

	if age > 14 {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}

	if(age>19){
		fmt.Println("Yes")
	}else if (age<12){
		fmt.Println("Either")
	}else{
		fmt.Println("No")
	}

}
