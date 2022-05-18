import { Content } from "./content";

export class List {
  static contentCount = 0;
  private _items: Content[];
  constructor() {
    this._items = []; // initialize array
    this.increaseCount();

  }
  get items():Content[] {
    return this._items;}

  increaseCount() {
    return ++List.contentCount;
  }
 // addContent(id:number,placeName:string,Country:string,Rank:number,discription:string,imageLink:string,hashtag:string[]){
 //   this._items.push( id=id,placeName=placeName,Country=Country,Rank=Rank,imageLink=imageLink,hashtag=hashtag
//  );
  //}

  amount(): number {
    return this._items.length;
  }


}
