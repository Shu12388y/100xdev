// mutex -> used for race condition

package main

import (
	"fmt"
	"sync"
)

type post struct {
	views int
	mu    sync.Mutex // using mutex to handle racing condition
}

func (p *post) increment(wg *sync.WaitGroup) {

	defer func() {
		p.mu.Unlock()
		wg.Done()

	}()

	p.mu.Lock()
	p.views += 1

}

func main() {

	var wg sync.WaitGroup

	myPost := post{
		views: 0,
	}

	// doing concurrent operation
	for i := 0; i < 100; i++ {
		wg.Add(1)
		go myPost.increment(&wg)
	}


	wg.Wait()

	fmt.Println(myPost.views)

}
