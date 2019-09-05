import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/services/about.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  description:any;
  basicInfo:any;

  reviews=[];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.description = this.aboutService.getDescription();
    this.basicInfo = this.aboutService.getBasicInfo();
    this.reviews = this.aboutService.getAllReviews();
  }

  onAddReview(form : NgForm) { 
    this.aboutService.addReview(form.value);
    form.reset();
  }
}
