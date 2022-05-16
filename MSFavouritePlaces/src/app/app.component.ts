import { Component } from '@angular/core';
import { Content } from './models/content';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MSFavouritePlaces';
  FPlaces: Content;
  SPlaces:Content;
  constructor(){
    this.FPlaces={
      id:1 ,
      placeName: "Nigra Falls",
      Country: "Canada" ,
      Rank: 1 ,
      discription:"The Official City of Niagara Falls, Ontario Canada website! Interactive Maps, search Cemeteries, Niagara weather and tourism information and more" ,
imageLink:"https://th.bing.com/th/id/R.77064801323f39fef3d817184e8ff23b?rik=4sSRBA3z3%2fX7iw&pid=ImgRaw&r=0",
hashtag:["best Place","high visitors"]


    }
    this.SPlaces=
    {
      id:2 ,
      placeName: "Taj MehAl",
      Country: "India" ,
      Rank: 2 ,
      discription:"The Official City of Niagara Falls, Ontario Canada website! Interactive Maps, search Cemeteries, Niagara weather and tourism information and more" ,
imageLink:"https://th.bing.com/th/id/OIP.MV9lUCnYU_C1PhyMok9HHwHaEK?pid=ImgDet&rs=1",
hashtag:["best Place","high visitors"]


    };
  }
}
