import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { HitsFromSearch, ImageFromSearch } from '../../Interfaces/Searchinterface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private readonly apiService: ApiService) { }
  public searchTerm: string;
  data: HitsFromSearch[];

  searchImage(form: NgForm) {
    this.apiService.getImages(form.value.search)
    .subscribe(
      (resp: ImageFromSearch) => this.data =  resp.hits
      ,
      (error) => console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      )
    );
  }

}
