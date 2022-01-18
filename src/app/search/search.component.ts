import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() submittedSearch = new EventEmitter<string>();
  word = ''

  constructor() { }

  ngOnInit(): void {
  }

  onFormsubmit(event: any) {
    event.preventDefault()
    console.log(this.word)
    this.submittedSearch.emit(this.word)
  }

  onInput(event: any) {
    this.word = event.target.value
    console.log(this.word)
  }

}
