import { Component } from '@angular/core';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  songsList: any[] = [];
  songCategory: any[] = [];

  constructor(private songService: SongService) { 
    this.getAllSongs();
  }
  
  // Get all songs
  public getAllSongs() { 
    this.songService.songCards= this.songsList;
  }

  public getCategory() { 
    this.songService.browserAll = this.songCategory;
  }

}
