import { Component, Input } from '@angular/core';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-carousl',
  templateUrl: './carousl.component.html',
  styleUrl: './carousl.component.css'
})
export class CarouslComponent {
 
  showCarousel:boolean = true;
  songList:any[] = [];
  constructor(private songService: SongService) {
    this.getSongsList();
   }
  
  getSongsList() { 
    this.songList = this.songService.songCards.slice(0, 5);
  }
  
}
