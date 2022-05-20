import { Content } from "./content";

export class List {
  static contentCount = 0;
  private _items: Content[];
  constructor() {
    this._items = []; // initialize array
  

  }
  get items():Content[] {
    return this._items;}


 addContent(place:Content):void{
   this._items.push(place);
  }

  amount(): number {
    return this._items.length;
  }
displayPlace(index: number):string{
  if (this._items.length <= index || index < 0) {
    return `<h2>Error, invalid index requested: ${index}</h2>`;
  }
  return `
<table>
    <td>${this._items[index].id}</td>
    <td>${this._items[index].placeName}</td>
    <td>${this._items[index].Country}</td>
    <td>${this._items[index].Rank}</td>
    <td>${this._items[index].discription}</td>
    <td>${this._items[index].hashtag}</td>
    <td><img src="${this._items[index].imageLink}"/></td>
</table>
  
  `

}

}
