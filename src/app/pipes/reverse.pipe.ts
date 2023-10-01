import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string): any {
    let newCh : string="";
  //   for (let i=ch.length-1; i >=0; i--) {

  //     newCh = newCh + ch[i];
      
  //   }
  //  return newCh;
  for (let i = 0; i < ch.length; i++) {
    newCh= ch[i]+ newCh;
    
  }
  return newCh ;
  }
 
}
