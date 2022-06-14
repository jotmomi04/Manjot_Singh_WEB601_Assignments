import { Component, Input } from '@angular/core';
import { Content } from './models/content';
import { PlacesService } from './services/places.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MSFavouritePlaces';
  @Input() contentItem?: Content;
     


  getPlace: any;
  place?: Content; 
    
  constructor(private placeService: PlacesService) { 
    
  }

  ngOnInit(): void {
    
  }
  getOnePlace(id:any){
    this.placeService.getContentItem(id).subscribe((contentItemFromService: Content) => {
      this.place = contentItemFromService;

  })
  }

  

}