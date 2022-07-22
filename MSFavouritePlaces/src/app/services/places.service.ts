import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PLACES } from '../data/mock-contentList-db';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  DEFAULTEMPTY: Content = {
    id: -1,
    placeName: '',
    Country: ""
  };


  constructor() { }
  getContent(): Observable<Content[]> {
    return of(PLACES);
  }
  getContentItem(id: number):Observable<Content>{
    if (PLACES[id]){ // check if the content at that id exists
return of (PLACES[id])
    }
    else{ // if not, return the default
return of (this.DEFAULTEMPTY)
    }
  }
  addContentItem(content:Content):Observable<Content[]>{
return  of (PLACES);
  }  
  updateContentItem(content:Content):Observable<Content[]>{
    return  of (PLACES);
  }
  deleteContentItem(id:number):Observable<Content>{
    return of(PLACES[id])
  }

}
