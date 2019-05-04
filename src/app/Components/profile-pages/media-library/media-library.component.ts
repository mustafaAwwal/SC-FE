import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.scss']
})
export class MediaLibraryComponent implements OnInit {
  videos = [{
    videoSource: "https://res.cloudinary.com/do9bwaox0/video/upload/v1556956400/videos/WIN_20190504_00_51_05_Pro.mp4",
    teacherName: "Sir Mudassir",
    subject: "FOCP",
    topic: "fundamentals"
    },
    {
      videoSource: "https://res.cloudinary.com/do9bwaox0/video/upload/v1556956400/videos/WIN_20190504_00_51_05_Pro.mp4",
      teacherName: "Sir Mudassir",
      subject: "FOCP",
      topic: "fundamentals"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
