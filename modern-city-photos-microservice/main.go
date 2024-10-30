package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {

	mux := http.NewServeMux()
	mux.HandleFunc("/api/cities",Check(handleSendPhotos))
	fmt.Println("Running in port 3142...")
	http.ListenAndServe(":3142",mux)
}

type function func(http.ResponseWriter,*http.Request)error

func Check(f function )func(w http.ResponseWriter,r *http.Request){
	return func(w http.ResponseWriter,r *http.Request){
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")
		err := f(w,r)
		if err!=nil{
			msg,_ := json.Marshal(fmt.Sprintf("error, %v", err))
			w.Write(msg)
		}
	}
}



func handleSendPhotos(w http.ResponseWriter,r *http.Request)error{
	if r.Method != "GET"{
		return fmt.Errorf("invalid method")
	} 
	photos := SendCityPhotos()
	msg,err := json.Marshal(*photos)
	if err!=nil{
		return err
	}
	w.Write(msg)
	return nil
}






func SendCityPhotos()*[]string{
	photoUrls := []string{
		"https://images.pexels.com/photos/26926254/pexels-photo-26926254/free-photo-of-desert-and-dubai-cityscape-with-burj-khalifa-behind.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/29103166/pexels-photo-29103166/free-photo-of-stunning-brisbane-skyline-at-sunrise-with-casino.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/29102406/pexels-photo-29102406/free-photo-of-stunning-aerial-view-of-new-york-city-skyline-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/29077033/pexels-photo-29077033/free-photo-of-galata-tower-and-istanbul-cityscape-at-daytime.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/29087119/pexels-photo-29087119/free-photo-of-long-exposure-of-a-tram-at-night-in-berlin.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/29090119/pexels-photo-29090119/free-photo-of-night-cityscape-with-winding-light-trails.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/29073568/pexels-photo-29073568/free-photo-of-modern-glass-skyscraper-with-reflections.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/2411688/pexels-photo-2411688.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/356286/pexels-photo-356286.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/3559235/pexels-photo-3559235.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/28871011/pexels-photo-28871011/free-photo-of-aerial-view-of-urban-london-architecture.jpeg?auto=compress&cs=tinysrgb&w=800",
		"https://images.pexels.com/photos/3039853/pexels-photo-3039853.jpeg?auto=compress&cs=tinysrgb&w=800",



	}
	return &photoUrls
}