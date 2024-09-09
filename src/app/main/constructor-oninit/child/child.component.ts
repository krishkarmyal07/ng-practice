import { Component, DoCheck, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, DoCheck{
@Input() value = 0
constValue: Number = 0
initValue: Number = 0
constructor(){
  console.log(this.value)
  this.constValue = this.value
}

ngOnInit(): void{
  console.log(this.value)
  this.initValue = this.value
}

ngDoCheck(): void {
  console.log('ngdocheck initialized')
}

ngOnChanges(){
  console.log(this.value)
  console.log('ngonchanges initialized')
}
}
