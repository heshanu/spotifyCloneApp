import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../../service/searchbar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit{
  search: any = '';
  isSearchVisible:boolean = false;
  
  constructor(private searchService: SearchbarService) { 
   
  }
  public isSearchFieldVisible:boolean = false;

  ngOnInit(): void {  
    this.searchService.isSearchVisible.subscribe((value) => {
      this.isSearchFieldVisible = value;
      console.log(` top nav value`, value);
    })
  }  
  
   onNavigation(pageName: string) {
    if (pageName === 'search') {
      this.searchService.isSearchVisible.next(true);
    } else {
      this.searchService.isSearchVisible.next(false);
    }
  }
}
  
    


