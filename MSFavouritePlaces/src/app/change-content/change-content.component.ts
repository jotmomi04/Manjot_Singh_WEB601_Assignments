import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  id?:number;
  place?:Content;
  
  tempTags: string = '';
  constructor(
    private route: ActivatedRoute
    ,private placeService: PlacesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get("id") ?? 0);

      this.placeService.getContentItem(this.id)
        .subscribe((place) => {
          this.place = place;
        });
    });

  }

  addContentToServer(): void {

    this.contentItem.hashtag = this.tempTags.split(", ");
    
    this.placeService.addContent(this.contentItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
  }
  updateContentOnServer(): void {
  
    this.contentItem.hashtag = this.tempTags.split(", ");
    this.placeService.updateContent(this.contentItem)
      .subscribe(() =>
        console.log("Content updated successfully", this.contentItem)
      );
  }

}
