import { Component, OnInit } from '@angular/core';
import { user,DataServicesService } from '../../../../services/dataservices/data-services.service';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  private user : user[];
  private userLength = 0;
  private videoLength = 0;
  constructor(private dservice: DataServicesService) { }

  ngOnInit() {
    this.getUsers()
    this.getVideos();
  }

  getUsers() {
    this.dservice.getUsersForAdmin().subscribe((value)=>{
      this.user = value.users;
      console.log(this.user);
      this.userLength = this.user.length;
    });
  }

  getVideos() {
    this.dservice.getVideos().subscribe((value)=>{
      this.videoLength = value.videos.length;
    })
  }
}
