// range

package main

import "fmt"


func main()  {
	
	nums := [4]int{1,3,4,5}
	

	// using for loop
	// for i:= 0; i < 4;i++{
	// 		fmt.Println(nums[i])
	// }

	// for array/slice
	for i,num := range nums{
		fmt.Println(i , "-" ,num)
	}


	
	// for map
	names:= map[string]string{"fname":"shubham","lname":"paul"}

	for k,v := range(names){
		fmt.Println(k , v)
	}



	// for string
	// i -> starting byte of rune
	// c -> unicode code point rune
	for i,c := range("shub"){
		fmt.Println(i,string(c))
	}


}