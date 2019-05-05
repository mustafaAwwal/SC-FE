import { Component, OnInit } from '@angular/core';
import { userOneInformation,DataServicesService } from '../../../../services/dataservices/data-services.service'
import {SecurityService} from '../../../../services/securityServices/security.service';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit {
  currentUser :userOneInformation;
  userInformation = {
    accountType: "",
    _id: "",
    emailAddress: "",
    username: "",
    subject: ""
  }
  constructor(private dservice : DataServicesService,private sService: SecurityService) { }

  ngOnInit() {
    this.getUserInformation();
  }
  getUserInformation() {
    let teacherId = localStorage.getItem("teacherId");
    this.dservice.findingOneUSer(teacherId).subscribe((value)=>{
      this.currentUser = value;
      this.userInformation = this.currentUser.user;
      localStorage.setItem("subject",this.userInformation.subject)
      
    })
  }
  isTeacher():boolean {
    return this.sService.isTeacher();
  }

}
