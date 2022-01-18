import { Component } from '@angular/core';
import { WikiServiceService } from './wiki-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wikiService: WikiServiceService) { }
  searchResults = [];
  recievedSearch(word: any) {
    this.wikiService.search(word).subscribe(
      (data: any) => {
        this.searchResults = data.query.search;
      }
    )
  }
    
}

