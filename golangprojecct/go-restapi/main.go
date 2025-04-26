package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"math/rand"
	"net/http"
	"strconv"
)

type Movie struct {
	ID       string    `json:"id"`
	Isbn     string    `json:"isbn"`
	Title    string    `json:"title"`
	Director *Director `json:"director"`
}

type Director struct {
	firstname string `json:"firtname"`
	lastname  string `json:"lastname"`
}

var movie []Movie

func main() {

	movie = append(movie, Movie{
		ID:    "1",
		Isbn:  "146",
		Title: "Movie One",
		Director: &Director{
			firstname: "shubham",
			lastname:  "pai",
		},
	})

	r := mux.NewRouter()

	r.HandleFunc("/movies", getMovies).Methods("GET")

	r.HandleFunc("/movie/{id}", getMovie).Methods("GET")

	r.HandleFunc("/movies", createMovies).Methods("POST")

	r.HandleFunc("/movies/{id}", updateMovie).Methods("PUT")

	r.HandleFunc("/movies/{id}", deleteMovie).Methods("DELETE")

	fmt.Println("Starting the server at port 8000\n")

	log.Fatal(http.ListenAndServe(":8000", r))

}
