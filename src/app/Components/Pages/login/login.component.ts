import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { loginData, DataServicesService } from '../../../../services/dataservices/data-services.service' 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: loginData;
  massage = "";
  constructor(private router: Router,private dservice: DataServicesService) {
    
   }

  ngOnInit() {
  }

  loginDataHandler(email,password) {
    this.login = {
      emailAddress: email,
      password: password
    }
    this.dservice.loginUser(this.login).subscribe((value)=>{
      console.log(value);
      if(value.username){
          localStorage.setItem("accountType",value.accountType)
          localStorage.setItem("teacherId",value.id)
          localStorage.setItem("username",value.username)
          if(value.accountType == "admin"){
            this.router.navigate(['admin'])
          }
          else {
            this.router.navigate(['teacher','main'])
          }
      }
      else {
        this.massage = "wrong information"
      }
    });
  }

}
