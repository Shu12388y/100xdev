package main

import (
	"fmt"
	"log"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {

	if r.URL.Path != "/hello" {
		http.Error(w, "404 Not Found", http.StatusNotFound)
		return
	}

	if r.Method != "GET" {
		http.Error(w, "Method is not Support", http.StatusNotFound)
		return
	}

	fmt.Fprintf(w, "hello")

}

func formHandler(w http.ResponseWriter, r *http.Request) {

	if r.URL.Path != "/form" {
		http.Error(w, "404 Not Found", http.StatusNotFound)
		return

	}

	if err := r.ParseForm(); err != nil {
		fmt.Fprintf(w, "Parse Form err %v", err)
	}

	fmt.Fprintf(w, "Post Succesful")

	name := r.FormValue("name")
	email := r.FormValue("email")

	if name == "" || email == "" {
		http.Error(w, "Empty Request", http.StatusBadRequest)
	}

	fmt.Fprintf(w,"%s",name);
	fmt.Fprintf(w,"%s",email);


}

func main() {

	fileServer := http.FileServer(http.Dir("./static"))

	http.Handle("/", fileServer)

	http.HandleFunc("/form", formHandler)

	http.HandleFunc("/hello", helloHandler)

	fmt.Println("Starting Server at port 8000")

	if err := http.ListenAndServe(":8000", nil); err != nil {
		log.Fatal(err)
	}

}
