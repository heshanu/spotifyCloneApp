import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../../service/searchbar.service';
import { SongService } from '../../service/song.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  constructor(private searchService: SearchbarService,private songService:SongService) { }
  selectedSong:any;
  songName!: string;

  ngOnInit(): void {
    this.searchService.songName.subscribe((value) => {
      this.songName = value;
      console.log('this is search', this.searchService.songName.value);
      this.selectedSong = this.songService.songCards.filter((v: any) => {
        return v.title === this.songName;
      });
    });

  }

}
