import { Component, OnInit } from '@angular/core';
import { video,DataServicesService} from '../../../../services/dataservices/data-services.service'

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.scss']
})
export class MediaLibraryComponent implements OnInit {
  
  showForm = false;
  videos : video[]
  
  constructor(private dservice: DataServicesService) {
    this.getVideos();
   }


  ngOnInit() {
  }

  showFormHandler() {
    this.showForm = !this.showForm;
  }
  getVideos(){
     this.dservice.getVideosByUserId().subscribe((value)=>{
       this.videos = value.videos;
       console.log(value)
     })
  }
  
  
}
