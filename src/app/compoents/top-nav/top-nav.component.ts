import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../../service/searchbar.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit{

  search: any = '';
  songName!:any;
  isSearchVisible:boolean = false;
  
  constructor(private searchService: SearchbarService, private fb: FormBuilder) { }
  
  searchForm: any = this.fb.group({
    songName:new FormControl()
  });

  public isSearchFieldVisible:boolean = false;

  ngOnInit(): void {  
    this.searchService.isSearchVisible.subscribe((value) => {
      this.isSearchFieldVisible = value;
      console.log(`top nav value`, value);
    });

    this.searchService.songName.subscribe((value) => {
      this.songName = value;
    });
  }  
  
  public formSubmit(): void{ 
   // alert(this.searchForm.value.songName);
    this.searchService.songName.next(this.searchForm.value.songName);
    //alert(this.searchService.songName.value);
  }

  public onNavigation(pageName: string) {
    if (pageName === 'search') {
      this.searchService.isSearchVisible.next(true);
    } else {
      this.searchService.isSearchVisible.next(false);
    }
  }
}
  
    


