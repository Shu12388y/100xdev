// enum

package main

import "fmt"

type OrderStatus int 

const (
	Received OrderStatus = iota
	Confirmed 
	Prepared
	Delivered
)





func changeOrderStatus(order OrderStatus) {
	fmt.Println("Order status is: ", order)
}

func main() {
	changeOrderStatus(Prepared)
}
