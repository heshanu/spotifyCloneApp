import { Component } from '@angular/core';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private songService: SongService) { 

  }
  
  

}
