import { Component } from '@angular/core';
import { Content } from './models/content';
import { PlacesService } from './services/places.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MSFavouritePlaces';
     


  getPlace: any;
  place?: Content; 
    
  constructor(private placeService: PlacesService) { 
    
  }

  ngOnInit(): void {
    this.placeService.getContentItem(3).subscribe((contentItemFromService: Content) => {
      this.place = contentItemFromService;
  })
  }

  

}