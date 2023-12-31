import { Component, OnInit } from '@angular/core';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.css'
})
export class SongCardComponent implements OnInit{

  songListCard: any[] = [];
  constructor(private songSerivce: SongService) { }

  ngOnInit(): void {
    this.songListCard = this.songSerivce.songCards;
  }
 
 
}
