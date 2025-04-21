// interface

package main

import "fmt"



type paymenter interface{
	pay(amount float32)
}



type payment struct{
	gateway paymenter

}

func (p payment) makePayment(amount float32) bool {

	razorpayGW := razorpay{}
	razorpayGW.pay(amount)
	return true
}

type razorpay struct{}

func (r razorpay) pay(amount float32) {
	fmt.Println("Making payment using razarpay", amount)
}

func main() {

	paymentvise := payment{
		gateway: razorpay{},
	}
	paymentvise.makePayment(12.4)

}
