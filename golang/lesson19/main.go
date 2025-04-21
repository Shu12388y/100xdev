// wait group

package main

import (
	"fmt"
	"sync"
)

func task(id int, w *sync.WaitGroup) {
	defer w.Done()
	fmt.Println(id)
}

func main() {

	var wg sync.WaitGroup

	
	for i := 0; i < 100; i++ {
		wg.Add(1)
		go task(i, &wg)
	}
	wg.Wait()

}
