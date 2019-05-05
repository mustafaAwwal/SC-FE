import { Injectable } from '@angular/core';
import { SecurityService} from '../securityServices/security.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private sService: SecurityService,private router: Router) { }
  canActivate() {
    if(this.sService.isLogin()){
      return true;
    }
    else {
      this.router.navigate(['']);
      return false;
    }
  }
}
