// channels

package main

import (
	"fmt"
	"time"
)

// func proccessNum(numChan chan int) {

// 	for num := range numChan {
// 		fmt.Println("processing number", num)
// 		time.Sleep(time.Second)
// 	}

// }

// func sum(result chan int, a int, b int) {

// 	numsResult := a + b
// 	result <- numsResult

// }

func emailSender(emailChan chan string) {
	for email := range emailChan {
		fmt.Println("send email ", email)
		time.Sleep(time.Second)
	}
}

func main() {

	// create a channel
	// numChan := make(chan int)

	// run the fucntion in different gorountine
	// go proccessNum(numChan)

	// for {

	// 	// sending data to the channel
	// 	numChan <- rand.Intn(100)
	// }

	// result := make(chan int)

	// go sum(result, 2, 3)

	// res := <-result

	// fmt.Println("Result", res)

	// buffer channel
	emailChan := make(chan string, 100)



	go emailSender(emailChan)

	for i := 1; i <= 100; i++ {
		emailChan <- fmt.Sprintf("%d@gmail.com", i)
	}


	// close the channel
	close(emailChan)


	
	
	// messageChannel := make(chan string)

	// // sending data to channel
	// messageChannel <- "ping"    // blocking

	// // getting data from channel

	// msg := <- messageChannel

	// fmt.Println(msg)

}
