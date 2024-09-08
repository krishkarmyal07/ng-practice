import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
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
}
