import { Component, Input } from '@angular/core';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-carousl',
  templateUrl: './carousl.component.html',
  styleUrl: './carousl.component.css'
})
export class CarouslComponent {
 
  @Input() showCarousel: boolean = true;
  songCard: any[] = [];
  
  constructor(private songService: SongService) {
    this.getSongsList();
   }
  
  getSongsList() { 
    this.songCard = this.songService.songCards.slice(0, 5);
  }
  
}
