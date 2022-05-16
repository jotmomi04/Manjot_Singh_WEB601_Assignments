import { Component } from '@angular/core';
import { Content } from './models/content';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MSFavouritePlaces';
  Places: Content;
  constructor(){
    this.Places={
      id:1 ,
      placeName: "Nigra Falls",
      Country: "Canada" ,
      Rank: 1 ,
      discription:"The Official City of Niagara Falls, Ontario Canada website! Interactive Maps, search Cemeteries, Niagara weather and tourism information and more" ,
imageLink:"https://th.bing.com/th/id/R.77064801323f39fef3d817184e8ff23b?rik=4sSRBA3z3%2fX7iw&pid=ImgRaw&r=0",
hashtag:["best Place","high visitors"]


    }
  }
}
