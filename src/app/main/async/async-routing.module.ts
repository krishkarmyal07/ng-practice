import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './async.component';
import { ObservablePromiseComponent } from './observable-promise/observable-promise.component';
import { ObservableSubjectComponent } from './observable-subject/observable-subject.component';
import { SubjectBehaviourReplayComponent } from './subject-behaviour-replay/subject-behaviour-replay.component';

const routes: Routes = [
  { path: '', component: AsyncComponent },
  { path: 'obs&prom', component: ObservablePromiseComponent},
  { path: 'obs&subj', component: ObservableSubjectComponent},
  { path: 'subj&behav&replay', component: SubjectBehaviourReplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncRoutingModule { }
