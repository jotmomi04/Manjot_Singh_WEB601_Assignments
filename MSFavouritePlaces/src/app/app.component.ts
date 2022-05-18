import { Component } from '@angular/core';
import{Content} from "./models/content";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MSFavouritePlaces';
    Place:Content[] =[{
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
      imageLink: "https://th.bing.com/th/id/R.77064801323f39fef3d817184e8ff23b?rik=4sSRBA3z3%2fX7iw&pid=ImgRaw&r=0",
      hashtag: ["best Place", "high visitors"]
    },{ id: 3,
      placeName: "Punjab",
      Country: "India",
      Rank: 1,
      discription: "Good plce",
      imageLink: "https://th.bing.com/th/id/R.77064801323f39fef3d817184e8ff23b?rik=4sSRBA3z3%2fX7iw&pid=ImgRaw&r=0",
      hashtag: ["best Place", "high visitors"]},
      { id: 4,
        placeName: "Venice",
        Country: "Italy",
        Rank: 5,
        discription: "more water",
        imageLink: "https://th.bing.com/th/id/R.77064801323f39fef3d817184e8ff23b?rik=4sSRBA3z3%2fX7iw&pid=ImgRaw&r=0",
        hashtag: ["best","water", "high visitors"]}]

}
