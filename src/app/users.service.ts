import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //start variables
  userFavorite;

  //End variables

  constructor(private http: HttpClient) { }
  putuserdata(id,obj){
    
    return this.http.put(`https://tipme-api.herokuapp.com/users/${id}`,obj)
  }
  getTour(){
    return this.http.get("https://tipme-api.herokuapp.com/tours");
  }
  getCompanyData(){
    return this.http.get("https://tipme-api.herokuapp.com/company");
  }
  getCompanyPackage(id) {
    return this.http.get(`https://tipme-api.herokuapp.com/company/${id}`);
  }

  getTourGuid() {
    return this.http.get("https://tipme-api.herokuapp.com/tourGuid");
  }
  getTourGuidPackage(id) {
    return this.http.get(`https://tipme-api.herokuapp.com/tourGuid/${id}`);
  }

  postUser(user) {
    return this.http.post("https://tipme-api.herokuapp.com/users", user);
  }

  getUser() {
    return this.http.get("https://tipme-api.herokuapp.com/users");
  }
  gettourguide(id) {
    return this.http.get(`https://tipme-api.herokuapp.com/users/${id}`);
  }
  // thses methodes to get  user favorite trip and send it in his profile 
  postUserFavoriteTrip(obj) {
    const headers = { 'Content-Type': 'application/json ; charset=UTF-8' };
    return this.http.post('https://tipme-api.herokuapp.com/user-favorite-trip/', obj, { headers });

    // return this.http.post<any>(url, obj , headers);

  }


  getUserFavoriteTrip() {
    return this.http.get('https://tipme-api.herokuapp.com/user-favorite-trip/');
  }

  deleteUserFavoriteTrip(id) {
    return this.http.delete('https://tipme-api.herokuapp.com/user-favorite-trip/' + id)
  }
// get tour guid of trip

  // thses methodes to get the  user  post  to  share it 
  // in guid me page 

  postUserPost(obj) {
    const headers = { 'Content-Type': 'application/json ; charset=UTF-8' };

    return this.http.post('https://tipme-api.herokuapp.com/user-post/', obj, { headers });
  }


  getUserPost() {

    return this.http.get('https://tipme-api.herokuapp.com/user-post/');
  }

  cancelUserPost(id) {
    return this.http.delete('https://tipme-api.herokuapp.com/user-post/'+id)
  }


  // thses methodes  dealing with  tour guide reply   

  postTourGuideReply(obj) {
    const headers = { 'Content-Type': 'application/json ; charset=UTF-8' };
    return this.http.post('https://tipme-api.herokuapp.com/guide-reply/', obj, { headers });
  }

  getTourGuideReply() {
    return this.http.get('https://tipme-api.herokuapp.com/guide-reply/');
  }

  deleteTourGuideReply(id) {
    return this.http.delete('https://tipme-api.herokuapp.com/guide-reply/' + id)
  }


  postUserPostAndGuideReply(obj) {
    const headers = { 'Content-Type': 'application/json ; charset=UTF-8' };
    return this.http.post('https://tipme-api.herokuapp.com/post-reply', obj, { headers })

  }
  getUserPostAndGuideReply() {
    return this.http.get('https://tipme-api.herokuapp.com/post-reply');

  }
  deleteUserPostAndGuideReply() {
    return this.http.get('https://tipme-api.herokuapp.com/post-reply');
  }

  

  // Ayaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa













}