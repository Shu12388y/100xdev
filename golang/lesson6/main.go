// arrays

package main

import "fmt"

func main() {

	var nums [4]int
	fmt.Println(len(nums)) // 4
	fmt.Println(nums)      //	[0 0 0 0]

	val := [3] int {1,2,4}
	fmt.Println(val)


	// 2d array
	 num := [2][2] int{{2,3},{5,6}}
	 fmt.Println(num)

}
