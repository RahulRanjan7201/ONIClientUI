import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../service/app-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  postsData:any[] = [];
   constructor(private service: AppServiceService) {
    
  }

  async ngOnInit() {
    // TODO: Lazy Loading
    await this.loadPosts()
   
  }
  async loadPosts() {
    try {
      this.postsData= await this.service.getPosts();
      console.log(this.postsData)
    } catch (err) {
      alert('Failed to load Posts');
    }
  }
}
