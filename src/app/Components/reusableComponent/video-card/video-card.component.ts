import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() videoSource: String;
  @Input() teacherName: String;
  @Input() subject: String;
  @Input() topic: String;
  constructor() { 
  
  }

  ngOnInit() {
    // console.log(this.subject);
    // console.log(this.videoSource);
    // console.log(this.topic);
    // console.log(this.subject);

  }

}
