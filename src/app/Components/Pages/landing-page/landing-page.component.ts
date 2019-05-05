import { Component, OnInit } from '@angular/core';
import { DataServicesService,video } from '../../../../services/dataservices/data-services.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  videos : video[];
  constructor(private dService: DataServicesService) { 
    this.getVideos();
  }

  ngOnInit() {
  }

  getVideos() {
    this.dService.getVideos().subscribe((value)=>{
      this.videos = value.videos;
    })
  }

}
