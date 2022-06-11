import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
places:Content[];
authorNotFound="";   // i dont have author in my list so i use country  
authorFound="";
hasValue:boolean = false;
checkAuthor(val:string){
  console.log(val)
this.places.forEach(m=>{
if(m.Country == val){ this.hasValue=true
  }
 
})

if(this.hasValue){
  this.authorFound=val +" Has found in List"
  this.authorNotFound=""
}
else{
  this.authorNotFound = val + " is not Found in List"
  this.authorFound =""
}
this.hasValue=false
}


constructor(private placeService: PlacesService) {
   this.places=[]
   }

  ngOnInit(): void {
    this.placeService.getContent().subscribe((contentArrayFromService: Content[]) => {
      this.places = contentArrayFromService;})
  }

}
