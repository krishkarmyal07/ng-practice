import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
isDisabled: boolean = false
comments: [string] = ['']
commentsProp: [string] = ['']

addComment(text: string, type: string) {
  if(type == 'prop')
   {
    this.commentsProp.push(text)
   }

   else{
    this.comments.push(text)
   }
}
}
