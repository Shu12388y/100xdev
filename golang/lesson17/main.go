// generic

package main

import "fmt"




// we have make  generic to accept any type
func printSlice[T int | string | bool](items []T){
	for _,item := range items{
			fmt.Println(item)
	}
}



func main()  {
	printSlice([]string{"shubham","paul"});
	printSlice([]int{1,2,4,5});
	printSlice([]bool{true,false});

}