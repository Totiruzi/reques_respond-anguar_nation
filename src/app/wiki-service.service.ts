import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiServiceService {

  constructor(private http: HttpClient) { }

  search(word: string) {
    return this.http.get(`https://en.wikipedia.org/w/api.php?`,{
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: word,
        utf8: '1',
        origin: '*',
    }
  })
  }
}
