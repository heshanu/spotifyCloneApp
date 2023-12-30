import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousl',
  templateUrl: './carousl.component.html',
  styleUrl: './carousl.component.css'
})
export class CarouslComponent {
  @Input() songList: any[] = [];
  
}
