import { Component, OnInit } from '@angular/core';
import { SecurityService} from '../../../../services/securityServices/security.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private sService : SecurityService, private router: Router) { }

  ngOnInit() {
    this.isLogin();
  }
  
  isLogin():boolean {
    return this.sService.isLogin();
  }
  signOut() {
    this.sService.removeLoginData()
    this.isLogin();
    this.router.navigate(['']);
  }
}
