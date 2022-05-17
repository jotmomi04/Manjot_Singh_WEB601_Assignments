import { Places } from "./places";

export class List {
    static contentCount = 0;
    private _places: Places[];
    constructor() {
      this._places = []; // initialize array
      this.increaseCount();
     
    }
    get items():Places[] {
      return this._places;}
      
      increaseCount() {
        return ++List.contentCount;
      }
      addContent(newPlace: Places): void {  
        this._places.push(newPlace);    
    }

    amount(): number {
        return this._places.length;    
    }


}
