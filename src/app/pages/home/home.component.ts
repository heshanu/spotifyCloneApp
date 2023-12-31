import { Component } from '@angular/core';
import { SearchbarService } from '../../service/searchbar.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentRoute!: any;
  constructor(private sb: SearchbarService, private router: Router) {
     this.onSearch();   
  }
  isSearchFieldVisible: boolean = false;

 public browserAll = [
    {
      bgColor: 'red',
      color: 'white',
      title: 'Podcasts',
    },
    { bgColor: 'green', color: 'white', title: 'Made for you' },
    { bgColor: 'purple', color: 'white', title: 'Charts' },
    { bgColor: 'blue', color: 'white', title: 'Live streams' },
    { bgColor: 'pink', color: 'white', title: 'Bollywood' },
    { bgColor: 'lightblue', color: 'white', title: 'Punjabi' },
    { bgColor: 'orange', color: 'white', title: 'Tamil' },
    { bgColor: 'yellow', color: 'white', title: 'Telugu' },
    { bgColor: 'black', color: 'white', title: 'Marathi' },
    { bgColor: 'orangered', color: 'white', title: 'Hip-Hop' },
    { bgColor: 'darkgray', color: 'white', title: 'Workout' },
    { bgColor: 'smokewhite', color: 'white', title: 'R&B' },
  ];
  public songCards = [
    {
      song_id: 1,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Romantic Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: 'assets/dangerous.mp3',
    },
    {
      song_id: 2,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Peaceful Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 3,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'DJ Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 4,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Party Mashup Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 5,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'HeartBreak Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: 'assets/Bezubaan.mp3',
    },
    {
      song_id: 6,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Spiritual Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 7,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Religional Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 8,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'English Mashups',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 9,
      thumbnail:
        'https://en.wikialpha.org/mediawiki/images/archive/5/50/20220720185634%21Ponishare-verified.png',
      title: 'Motivational Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
  ];

  ngOnInit(): void {
   this.onSearch();
  }

  onInputFilterRes($event: string) {
    const res = this.browserAll.filter(
      (element) => element.title.toLowerCase() === $event.toLowerCase().trim()
    );
    console.log(res);
  }

  onSearch(): void{ 
    this.router.url === '/search' ? this.sb.isSearchVisible.next(true)
      : this.sb.isSearchVisible.next(false); 
    // if (this.actRouter.snapshot.routeConfig?.path === 'search') {
    //   this.sb.isSearchVisible.next(true);
    // } else {
    //   this.sb.isSearchVisible.next(false);
    // }

    // this.currentRoute = this.router.navigateByUrl('/search');
    // console.log(`currentRoute`, this.currentRoute);
    
          
      // filter((event: any) => event instanceof NavigationEnd)
      //     .subscribe((event:any)=> 
      //      {
      //       this.currentRoute = event.url;   
      //       if (this.currentRoute === '/search'){
      //         this.sb.isSearchVisible.next(true);
      //        } else { 
      //         this.sb.isSearchVisible.next(false);
      //       }
      //         console.log(event);
      //      });
    
  }

  onNavigation(pageName: string) {
    if (pageName === 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }
  }

}
