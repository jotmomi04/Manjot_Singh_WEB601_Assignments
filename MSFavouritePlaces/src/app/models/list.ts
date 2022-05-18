import {Content} from "./content";

export class ContentList {
  static contentCount = 0;
  private _places: Content[];
  constructor(place: Content) {
    this._places = []; // initialize array
    this._places[0] = place; // set the value of the item at the first index of the array
    this.increaseCount();
  }
  get items():Content[] {
    return this._places;
  }

  increaseCount() {
    return ++ContentList.contentCount;
  }

}