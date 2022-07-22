import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.scss']
})
export class SearchPlaceComponent implements OnInit {

  place?: Content;

  constructor(private placeService: PlacesService) { }

  ngOnInit(): void {
  }
  getOnePlace(id:any){
    this.placeService.getContentItem(id).subscribe((place: Content) => {
      this.place = place;

 })}
 

}
