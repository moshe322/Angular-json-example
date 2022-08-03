import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?:number): string {
    if(!limit) limit=20;
    if(value.length >limit){
      return value.substring(0,limit)+"...";
    }
    else{
      return value;
    }
  }

}
