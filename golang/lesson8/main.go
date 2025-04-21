// maps

package main

import "fmt"

func main() {

	// create a map
	m := make(map[string]string)

	// setting a element
	m["name"] = "golang"

	// print the element
	fmt.Println(m["name"])


	// delete a  element
	delete(m,"name")


	// clear the map
	clear(m)

	// get the value
	v,ok := m["name"]
	if ok{
		fmt.Println(v)
	}else{
		fmt.Println("Not Found")
	}


	

}
