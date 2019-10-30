import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagSearchService {
  url = 'https://pixabay.com/api/';
  apiKey = '2106452-17ad7e0c324a30ecacbcb9dd8';
  constructor(private http: HttpClient) { }

  searchData(searchTerm: any): Observable<any> {
      var data = this.http.get(`${this.url}?key=${this.apiKey}&q=${encodeURI(searchTerm)}&image_type=photo&pretty=true`).pipe(
        map(results => results['hits'])
      );
      // console.log(data.subscribe(results => console.log(results)));
    return data;
  }
}