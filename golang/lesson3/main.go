package main

import "fmt"

func main() {

	// for loop this is no while loop in go

	i := 1
	for i <= 3 {
		fmt.Println(i)
		i = i + 1
	}


	
	for i:=0 ; i < 4 ; i ++ {
		fmt.Println(i)
	}


	// using range
	for i:=  range(3){
		fmt.Println(i)
	}


	// infinte loop
	for {
			fmt.Println("1")
	}


}
