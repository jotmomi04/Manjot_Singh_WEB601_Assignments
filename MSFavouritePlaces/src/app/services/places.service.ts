import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PLACES } from '../data/mock-contentList-db';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("/api/content");
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
