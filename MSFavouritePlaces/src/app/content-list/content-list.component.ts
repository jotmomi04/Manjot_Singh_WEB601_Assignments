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
      Rank: 4,
      discription: "The Official City of Niagara Falls, Ontario Canada website! Interactive Maps, search Cemeteries, Niagara weather and tourism information and more! ",
      imageLink: "https://th.bing.com/th/id/R.77064801323f39fef3d817184e8ff23b?rik=4sSRBA3z3%2fX7iw&pid=ImgRaw&r=0",
      hashtag: ["best Place", "high visitors"]
    },{
      id: 2,
      placeName: "Taj Mahal",
      Country: "India",
      Rank: 2,
      discription: "The Taj Mahal, is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra",
      imageLink: "https://th.bing.com/th/id/OIP.C1bH6nhDixeoOvELYZW4XQHaFP?w=255&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      ,  hashtag: ["best Place", "high visitors"]
    },{ id: 3,
      placeName: "Punjab",
      Country: "India",
      Rank: 1,
      discription: "Punjab is a state in northern India. Forming part of the larger Punjab region of the Indian subcontinent",
      imageLink: "https://www.bing.com/th?id=OIP.kcoOW-3r-CuUHfZE06ZNwwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      hashtag: ["best Place", "high visitors"]},
      { id: 4,
        placeName: "Venice",
        Country: "Italy",
        Rank: 5,
        discription: "Venice is a city in northeastern Italy and the capital of the Veneto region. It is built on a group of 118 small islands that are separated by canals and linked by over 400 bridges",
        imageLink:"https://th.bing.com/th/id/OIP.nbWreLvNRy6V2f1upaBnzwHaE7?w=252&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        hashtag: ["best","water", "high visitors"]},
        {
          id: 5,
          placeName: "eiffel Tower",
          Country: "Paris",
          Rank: 3,
          discription: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel",
          imageLink: "https://th.bing.com/th/id/OIP.1wzJdl2EU3BIcih_gWBTagHaJO?w=186&h=233&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          hashtag: ["best Place", "high visitors"]
        }]
   }

  ngOnInit(): void {
  }

}