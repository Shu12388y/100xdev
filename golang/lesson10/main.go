// fucntion

package main

import "fmt"

func add(a int, b int) int {
	return a + b
}



// we can return multiple value
func getlanguage() (string,string,string) {
	return "golang","javascript","c"
}



func processIt(fn func(a int)int) {
	fn(1)
	
}



func main() {

	result := add(12, 4)
	fmt.Println(result)
	lang1,lang2,lang3 := getlanguage()
	fmt.Println(lang1,lang2,lang3)

	fn:=func (a int)int  {
		return 1
	}

	processIt(fn)

}
