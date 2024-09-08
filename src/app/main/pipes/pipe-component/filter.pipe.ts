import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    if(searchText === ''){
      return value;
    }
    else{
      console.log(value.filter((ele: String) => ele.startsWith(searchText)))
      return value.filter((ele: String) => ele.startsWith(searchText));
    }
  }


}
