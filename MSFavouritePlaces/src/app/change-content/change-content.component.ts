import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {

  contentItem: Content = {
    placeName: "",
    Country: ""
  };
  tempTags: string = '';
  constructor(private placeService: PlacesService) { }

  ngOnInit(): void {
  }

  addContentToServer(): void {
    this.contentItem.hashtag = this.tempTags.split(", ");
    this.placeService.addContent(this.contentItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
  }

}
