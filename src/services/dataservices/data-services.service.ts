import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Router} from '@angular/router'
import { backendUrl as BEurl} from '../../environments/environment';


export interface loginData {
    emailAddress:any,
    password:any
}

export interface signupData {
    username:any,
    emailAddress:any,
    password:any,
    accountType:any,
    subject:any
}
export interface creation {
  creation: boolean
}
export interface loginResponse {
  accountType: any,
  id: any,
  username:any
}

export interface userOneInformation {
  user: {
    accountType: any,
    _id: any,
    username: any,
    emailAddress: any,
    subject: any
  }
}

export interface videoRecieve {
  videos: video[]
}

export interface video {
  teacherName: any,
  topic: any,
  videoUrl: any,
  teacherId: any,
  subject: any
}

export interface videoInformationSent {
  teacherName: any,
  topic: any,
  videoUrl:any,
  teacherId: any,
  subject: any
}

export interface usersDataAdmin {
  users: user[]
}

export interface user {
  _id: any,
  accountType: any,
  subject: any,
  username: any,
  emailAddress: any

}

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  
 


  constructor(private http:HttpClient,private router:Router) { }

  createUser(signup: signupData): Observable<creation> {
    let url = BEurl + "/users" + "/create";
    console.log(url);
    return this.http.post<creation>(url,signup)
  }

  loginUser(login:loginData): Observable<loginResponse> {
    let url = BEurl + "/login";
    return this.http.post<loginResponse>(url,login);
  }

  findingOneUSer(id: any): Observable<userOneInformation> {
    let url = BEurl + "/user/" + id;
    return this.http.get<userOneInformation>(url);
  }

  videoCreator(VI: videoInformationSent): Observable<creation> {
    let url = BEurl + "/video" + "/create"
    return this.http.post<creation>(url,VI);
  }

  getVideos(): Observable<videoRecieve> {
    let url = BEurl + "/video"
    return this.http.get<videoRecieve>(url);
  }

  getVideosByUserId(): Observable<videoRecieve> {
    let id = localStorage.getItem("teacherId");
    let url = BEurl +"/video/user/" + id;
    return this.http.get<videoRecieve>(url); 
  }

  getUsersForAdmin(): Observable<usersDataAdmin> {
    let url = BEurl + "/user"
    return this.http.get<usersDataAdmin>(url);
  }

}
