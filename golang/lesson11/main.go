// variadic function

package main

import "fmt"

func sum(nums ...int) int {
	total := 0

	for _, num := range nums {
		total += num
	}
	return total
}

func main() {

	nums := []int{1, 23, 4, 5}
	fmt.Println(sum(nums...)) 
	fmt.Println(sum(1, 2, 4, 0, 5, 7))
}
