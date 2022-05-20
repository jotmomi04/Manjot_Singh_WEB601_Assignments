import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
places:Content[];
  constructor() {
    this.places=[{
      id: 1,
      placeName: "Nigra Falls",
      Country: "Canada",
      Rank: 1,
      discription: "Awesome place ",
      imageLink: "https://th.bing.com/th/id/R.77064801323f39fef3d817184e8ff23b?rik=4sSRBA3z3%2fX7iw&pid=ImgRaw&r=0",
      hashtag: ["best Place", "high visitors"]
    },{
      id: 2,
      placeName: "Taj Mahal",
      Country: "Canada",
      Rank: 2,
      discription: "best place",
      imageLink: ""
      ,  hashtag: ["best Place", "high visitors"]
    },{ id: 3,
      placeName: "Punjab",
      Country: "India",
      Rank: 1,
      discription: "Good plce",
      imageLink: "https://www.bing.com/th?id=OIP.kcoOW-3r-CuUHfZE06ZNwwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      hashtag: ["best Place", "high visitors"]},
      { id: 4,
        placeName: "Venice",
        Country: "Italy",
        Rank: 5,
        discription: "more water",
        imageLink:"",
        hashtag: ["best","water", "high visitors"]},
        {
          id: 5,
          placeName: "eiffel Tower",
          Country: "Paris",
          Rank: 3,
          discription: "Biggest tower in the world",
          imageLink: "https://th.bing.com/th/id/OIP.1wzJdl2EU3BIcih_gWBTagHaJO?w=186&h=233&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          hashtag: ["best Place", "high visitors"]
        }]
   }

  ngOnInit(): void {
  }

}
