import { Injectable,Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  isLogin(): boolean {
    let verificationKey = localStorage.getItem("teacherId");
    if(verificationKey) {
      return true;
    }
    else {
      return false
    }
  }
  removeLoginData() {
    localStorage.removeItem("teacherId");
    localStorage.removeItem("username");
    localStorage.removeItem("accountType");
  }

  isTeacher(): boolean {
    if(localStorage.getItem("accountType") === "Teacher") {
      return true;
    }
    else {
      return false;
    }
  }

}
