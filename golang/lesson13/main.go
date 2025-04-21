// pointers
package main

import "fmt"

// pass by value
func changeNum(n *int) {
	*n = *n + 1
	fmt.Println(*n)
}

func main() {

	num := 1
	changeNum(&num)
	fmt.Println(num)

}
