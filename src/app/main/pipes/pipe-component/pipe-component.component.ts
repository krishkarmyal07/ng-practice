import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.scss']
})
export class PipeComponentComponent {

  purePipe = ''
  impurePipe = ''

  pureList = ['apple', 'banana', 'orange', 'mango']
  impureList = ['apple', 'banana', 'orange', 'mango']

  insertElement(){
    this.pureList.push('apricot')
    console.log(this.purePipe)
    // this.purePipe = ''
  }
  insertimpureElement(){
    this.impureList.push('apricot')
    console.log(this.purePipe)
    // this.purePipe = ''
  }
}
