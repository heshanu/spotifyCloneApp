import { Component, OnInit } from '@angular/core';
import { SongService } from '../../service/song.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent implements OnInit{
  constructor(private songService: SongService,private route:ActivatedRoute) { }
  routeSub!: any;
  selectedSong: any;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      this.routeSub = params['id'] || 1; //log the value of id
    });
    
    this.selectedSong= this.songService.getSongById(this.routeSub);
    console.log(this.selectedSong)
  }

}
