import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {
  public isSearchVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public songName: BehaviorSubject<any> = new BehaviorSubject<any>('');
  constructor() { }
}
