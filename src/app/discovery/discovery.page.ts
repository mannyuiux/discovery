import { Component, OnInit } from '@angular/core';
import { TagSearchService } from '../services/data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: 'discovery.page.html',
  styleUrls: ['discovery.page.scss']
})

export class DiscoveryPage implements OnInit {
  results: Observable<any>;
  tags: Array<string> = [];
  latestResults: {
    comments: number,
    downloads: number,
    favorites: number,
    id: number,
    imageHeight: number,
    imageSize: number,
    imageWidth: number,
    largeImageURL: string,
    likes: number,
    pageURL: string,
    previewHeight: number,
    previewURL: string,
    previewWidth: number,
    tags: Array<string>,
    type: string,
    user: string,
    userImageURL: string,
    user_id: number,
    views: number,
    webformatHeight: number,
    webformatURL: string,
    webformatWidth: number
  }[];
  searchTerm: Array<string> = [];
  private items = ["movies"];
  postsList: string = "topPosts";
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 4,
    scrollbar: true,
  };
  segmentChanged(ev: any) {
    //ev.detail.value;
  }
  constructor(private tagSearchService: TagSearchService) {
  }
  ngOnInit() {
    this.searchChanged(this.items);
  }
  searchChanged(items) {
    this.results = this.tagSearchService.searchData(items[0]);
    // console.log(this.results.subscribe((results) => console.log(results)));
    this.results.subscribe((results) => {
      results.sort((a, b) => {
        return a.id < b.id ? 1 : -1;
      });
      this.latestResults = results;
    });
  }
}
