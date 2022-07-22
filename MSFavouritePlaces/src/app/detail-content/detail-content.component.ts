import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../models/content';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.scss']
})
export class DetailContentComponent implements OnInit {
  id?: number;
  place?: Content;
  constructor(private route: ActivatedRoute,
    private placeService: PlacesService) { 
      
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get("thing") ?? 0);

      this.placeService.getContentItem(this.id)
        .subscribe((place) => {
          this.place = place;
        });
    });
}
}