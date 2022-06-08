import { Component, Input, OnInit } from '@angular/core';

import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
@Input() contentItem?: Content;
border='5px';
  constructor() { }

consoleMethod(){
console.log("ID :"+ this.contentItem?.id + "Rank :" + this.contentItem?.Type)
}

  ngOnInit(): void {
  }
 
}
