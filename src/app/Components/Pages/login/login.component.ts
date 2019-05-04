import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    
   }

  ngOnInit() {
  }

  loginDataHandler(email,password) {
    console.log(email);
    console.log(password);
    this.router.navigate(['profile','main'])
  }

}
