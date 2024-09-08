import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureFilter',
  pure: false
})
export class ImpureFilterPipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    if(searchText === ''){
      return value;
    }
    else{
      return value.filter((ele: any) => ele.startsWith(searchText))
    }
  }

}
