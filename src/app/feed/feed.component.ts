import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../service/app-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  fileSelected: File = null;
  postText: string = null;
  constructor(private service:AppServiceService) { }

  ngOnInit(): void {
  }

  onChooseFile(file: FileList) {
    this.fileSelected = file.item(0);
  }

  savePost() {
    if(!this.postText) {
      return alert("Message is Required.")
    } else {
      this.service.savePost(this.postText,this.fileSelected ,localStorage.getItem("userEmail"));
    }
  }
}
