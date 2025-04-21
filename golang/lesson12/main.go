// closures

package main

import "fmt"

// this function returns a function and return the increment and return the count value
func increment() func() int {
	var count = 0
	return func() int {
		count += 1
		return count
	}
}

func main() {

	increm := increment()
	fmt.Println(increm())
	fmt.Println(increm())


}
