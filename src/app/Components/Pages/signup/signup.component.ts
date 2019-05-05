import { Component, OnInit } from '@angular/core';
import { signupData,DataServicesService } from '../../../../services/dataservices/data-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup: signupData;
  massage = "";
  constructor(private dservice: DataServicesService,private router : Router) { }

  ngOnInit() {
  }
  signupDataHandler(username,email,password,accountType,subject) {
    this.signup = {
      username: username,
      emailAddress: email,
      password: password,
      accountType: accountType,
      subject: subject
    }
    this.dservice.createUser(this.signup).subscribe((value)=>{
      if(value.creation){
        this.router.navigate(['login']);
      }
      else {
        this.massage = "account already exists"
      }
    },(err)=>{console.log(err)});

    
  }
}
