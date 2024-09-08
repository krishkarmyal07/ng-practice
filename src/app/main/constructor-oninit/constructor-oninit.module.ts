import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructorOninitRoutingModule } from './constructor-oninit-routing.module';
import { ConstructorOninitComponent } from './constructor-oninit.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ConstructorOninitComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
    ConstructorOninitRoutingModule
  ]
})
export class ConstructorOninitModule { }
