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

  getContentItem(id: number): Observable<Content> {
    console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/content/" + id);
  }

  // U
  // content item needs to have the id set correctly
  updateContent(contentItem: Content): Observable<any> {
    return this.http.put<any>("api/chess", contentItem, this.httpOptions);
  }
  addContent(newContentItem: Content):
Observable<Content>{
return this.http.post<Content>("api/content"
,
newContentItem, this.httpOptions)
}
 deleteContentItem(id:number):Observable<Content>{
    return of(PLACES[id])
  }

}
