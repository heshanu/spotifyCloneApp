import { Component, OnInit } from '@angular/core';
import { SongService } from '../../service/song.service';
import { SearchbarService } from '../../service/searchbar.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.css'
})
export class SongCardComponent implements OnInit{

  songListCard: any[] = [];

  constructor(private searchService: SearchbarService,
    private songService: SongService, private actRouter: ActivatedRoute) { }
    // public songId: BehaviorSubject<any> = new BehaviorSubject<any>('');
  selectedSong:any;
  songName!: string;
  songId!: any;

  ngOnInit(): void {
    this.songListCard = this.songService.songCards;
    this.songId = this.actRouter.snapshot.params['id'];
    this.selectedSong = this.songService.songCards.filter((v: any) => {
      return v.song_id === this.songId;
    });
    // this.searchService.songName.subscribe((value) => {
    //   this.songId= value;
    
    //   this.selectedSong = this.songService.songCards.filter((v: any) => {
    //     return v.song_id === this.songId;
    //   });
    // });

  }
}
