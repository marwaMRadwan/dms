import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConvert'
})
export class TempConvertPipe implements PipeTransform {

  transform(value: number, u :string = "c") {
    if(u == "c"){
      return value - 5;
    }
    else if(u == "f"){
      return value + 5
    }
    return;
  }

}
