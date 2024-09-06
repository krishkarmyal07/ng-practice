import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncRoutingModule } from './async-routing.module';
import { AsyncComponent } from './async.component';
import { ObservablePromiseComponent } from './observable-promise/observable-promise.component';


@NgModule({
  declarations: [
    AsyncComponent,
    ObservablePromiseComponent
  ],
  imports: [
    CommonModule,
    AsyncRoutingModule
  ]
})
export class AsyncModule { }
