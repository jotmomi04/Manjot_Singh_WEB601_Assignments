import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../models/content';
import { PlacesService } from '../services/places.service';


@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {
  [x: string]: any;

  contentItem: Content = {
    placeName: "",
    Country: ""
  };
  id?:number;
  place?:Content
  
  tempTags: string = '';
  constructor(private router: Router,
    private route: ActivatedRoute
    ,private placeService: PlacesService,
    private elm: ElementRef) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get("id") ?? 0);

      this.placeService.getContentItem(this.id)
        .subscribe((place) => {
          this.place = place;
          console.log("Id" ,this.id)
        });
    });

  }
  

  addContentToServer(): void {

    this.contentItem.hashtag = this.tempTags.split(", ");
    this.router.navigate(['/list'])
    this.placeService.addContent(this.contentItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
  }
  updateContentOnServer(): void {
  
    this.contentItem.hashtag = this.tempTags.split(", ");
    this.router.navigate(['/list'])
    this.placeService.updateContent(this.contentItem)
      .subscribe(() =>
        console.log("Content updated successfully", this.contentItem)
      );
  }

}
