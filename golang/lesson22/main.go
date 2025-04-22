// file handling

package main

import (
	"os"
)

func main() {

	f, err := os.Open("test.txt")

	if err != nil {
		panic(err)
	}

	fileInfo, err := f.Stat()

	if err != nil {
		panic(err)
	}

	// file	 property
	// fmt.Println("File Name",fileInfo.Name())
	// fmt.Println("File dir",fileInfo.IsDir())
	// fmt.Println("File Name",fileInfo.Size())
	// fmt.Println("File Name",fileInfo.Mode())
	// fmt.Println("File Name",fileInfo.ModTime())

	
	// read files
	defer f.Close()

	buf := make([]byte, fileInfo.Size())

	_, err = f.Read(buf)

	if err != nil {
		panic(err)
	}

	for i := 0; i < len(buf); i++ {

		println(string(buf[i]))

	}

}
