// struct

package main

import (
	"fmt"
	"time"
)

type order struct {
	id        string
	amount    float32
	status    string
	timeStamp time.Time
}

// contructor
// we have use new keyboard

func newOrder(id string, amount float32, status string) *order {
	myOrder := order{
		id:     id,
		amount: amount,
		status: status,
	}
	return &myOrder

}

// add method in a structure
// in this we have to pass the first letter of the structure for reference

func (o *order) changeStatus(status string) {
	o.status = status
}

func (o order) getAmount() float32 {
	return o.amount
}

func main() {

	myorder := newOrder("124",45.6,"pending");
	fmt.Println(myorder)


	langauge := struct{
		name string
		isBoll bool
	}{"golang",true}

	fmt.Println(langauge)

	var order = order{
		id:     "124",
		amount: 23.5,
		status: "pending",
	}

	order.timeStamp = time.Now()

	order.changeStatus("success")

	order.getAmount()

	fmt.Println(order)

}
