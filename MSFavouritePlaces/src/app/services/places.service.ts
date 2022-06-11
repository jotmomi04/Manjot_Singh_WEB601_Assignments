import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PLACES } from '../data/mock-contentList-db';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor() { }
  getContent(): Observable<Content[]> {
    return of(PLACES);
  }
  getContentItem(id: number):Observable<Content>{
    return of(PLACES[id]);
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
