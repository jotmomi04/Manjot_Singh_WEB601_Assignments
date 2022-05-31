import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentItem: Content[],value?:string): Content[] {
    return contentItem.filter(setType=>setType.Type==value)
     }  

 
}
