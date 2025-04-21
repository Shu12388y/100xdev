// slices -> dynamic array

package main

import "fmt"

func main() {

	// uninitalized slice is nil

	var nums []int
	fmt.Println(nums)

	// make function is used to make slice (type, inital size, inital capacity)
	var num = make([]int,3,100)
	
	// cap function is use to check the capacity of the slice
	fmt.Println(cap(num))
	
	
	// added value
	num = append(num,1 )
	fmt.Println((num))


	// slice
	fmt.Println(num[:1])

}
