// switch statements

package main

import "fmt"

func main() {

	whoAmI := func(i interface{}) {
		switch i.(type) {
		case int:
			fmt.Println("interger")
		case string:
			fmt.Println("string")
		default:
			fmt.Println("other")

		}
	}

	whoAmI("str")
}
