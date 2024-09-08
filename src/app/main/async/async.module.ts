import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncRoutingModule } from './async-routing.module';
import { AsyncComponent } from './async.component';
import { ObservablePromiseComponent } from './observable-promise/observable-promise.component';
import { ObservableSubjectComponent } from './observable-subject/observable-subject.component';
import { SubjectBehaviourReplayComponent } from './subject-behaviour-replay/subject-behaviour-replay.component';


@NgModule({
  declarations: [
    AsyncComponent,
    ObservablePromiseComponent,
    ObservableSubjectComponent,
    SubjectBehaviourReplayComponent
  ],
  imports: [
    CommonModule,
    AsyncRoutingModule
  ]
})
export class AsyncModule { }
