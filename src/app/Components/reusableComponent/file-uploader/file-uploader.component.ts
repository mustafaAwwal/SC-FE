import { Component, OnInit , NgZone, Input} from '@angular/core';
import {FileUploader, FileUploaderOptions, ParsedResponseHeaders} from 'ng2-file-upload';
import {Cloudinary} from '@cloudinary/angular-5.x';
import { DataServicesService, videoInformationSent,userOneInformation} from '../../../../services/dataservices/data-services.service'
import { Subject } from 'rxjs';
import { Router } from '@angular/router'


@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  
  
  userInformation: any;
  
  hasBaseDropZoneOver: boolean = false;
  uploader: FileUploader;
  reverse = false;
  file: File;
  responses: Array<any>;
  imageProgress: any;
  data;
  validityStatement = "";
  validity = true;
  VI: videoInformationSent = {
    teacherId: "",
    teacherName: "",
    topic: "",
    videoUrl: "",
    subject: ""

    
  };
  constructor(private cloudinary: Cloudinary,private zone : NgZone,private dservice:DataServicesService, private router: Router) { 
    this.responses = [];
    
    }

  ngOnInit() {
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
    this.uploader = new FileUploader(uploaderOptions);
  
    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      // Add Cloudinary's unsigned upload preset to the upload form
      form.append('upload_preset', this.cloudinary.config().upload_preset);
      // Add built-in and custom tags for displaying the uploaded photo in the list
      let tags = 'myphotoalbum';
      
      // Upload to a custom folder
      // Note that by default, when uploading via the API, folders are not automatically created in your Media Library.
      // In order to automatically create the folders based on the API requests,
      // please go to your account upload settings and set the 'Auto-create folders' option to enabled.
      form.append('folder', 'videos');
      // Add custom tags
      form.append('tags', tags);
      // Add file to upload
      form.append('file', fileItem);
  
      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;
      return { fileItem, form };
    };
  
    // Insert or update an entry in the responses array
    const upsertResponse = fileItem => {
      // Run the update in a custom zone since for some reason change detection isn't performed
      // as part of the XHR request to upload the files.
      // Running in a custom zone forces change detection
        // Update an existing entry if it's upload hasn't completed yet
        // Find the id of an existing item
        if(fileItem.status == 200){
          this.imageProgress = fileItem.file.name + ' 100% Complete '
          this.fileNameChecker(fileItem.file.name);
        }
        else if(fileItem.progress){
          this.imageProgress = "uploading..." + fileItem.progress
        }
        const existingId = this.responses.reduce((prev, current, index) => {
          if (current.file.name === fileItem.file.name && !current.status) {
            return index;
          }
          return prev;
        }, -1);
        if (existingId > -1) {
          // Update existing item with new data
          this.responses[existingId] = Object.assign(this.responses[existingId], fileItem);
        } else {
          // Create new response
          this.responses.push(fileItem);
        }
  
    };
  
    // Update model on completion of uploading a file
    this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) =>
      upsertResponse(
        {
          file: item.file,
          status,
          data: JSON.parse(response)
        }
      );
  
    // Update model on upload progress event
    this.uploader.onProgressItem = (fileItem: any, progress: any) =>
      upsertResponse(
        {
          file: fileItem.file,
          progress,
          data: {}
        }
      );
  }
  fileNameChecker(fileName: string) {

    var allowed_extensions = new Array("mp4");
    var file_extension = fileName.split('.').pop().toLowerCase();

    for(var i = 0; i <= allowed_extensions.length; i++)
    {
        if(allowed_extensions[i]==file_extension)
        {
            this.validity = false;
            return;
        }
    }
    this.validity = true;
    this.validityStatement = "You must choose mp4 file"
  }
  

  videoDataHandler(topic) {
    console.log(localStorage.getItem("teacherId"))
    
    this.VI.teacherId = localStorage.getItem("teacherId");
    this.VI.subject = localStorage.getItem("subject");
    this.VI.teacherName = localStorage.getItem("username");
    this.VI.topic = topic;
    this.VI.videoUrl = this.responses.pop().data.url;
    this.dservice.videoCreator(this.VI).subscribe((value)=>{
      if(value.creation){
          console.log("done")
      } 
    });
    
   
  }
}




