import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'discovery.page.html',
  styleUrls: ['discovery.page.scss']
})

export class DiscoveryPage implements OnInit {
  private items = [];
  postsList: string = "topPosts";
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 4,
    scrollbar: true,
  };
  segmentChanged (ev: any) {
    //ev.detail.value;
  }
  ngOnInit() {
  }
}
