// goroutines
package main

import (
	"fmt"
)

func task(id int) {
	fmt.Println(id)
}

func main() {

	//  1048575
	for i := 0; i <= 1000000; i++ {
		go task(i)
	}

}
