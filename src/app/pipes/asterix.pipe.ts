import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string): any {
    let result: string = "";
    let vowels = ["a", "e", "i", "o", "y", "u"]
    for (let i = 0; i < ch.length; i++) {
      let inter = ch[i];

      for (let j = 0; j < vowels.length; j++) {
        if (ch[i].toLowerCase() == vowels[j]) {
          inter = "*"
          break;


        }

      }
      result = result + inter;

    }
    return result;
  }

}

