import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './async.component';
import { ObservablePromiseComponent } from './observable-promise/observable-promise.component';

const routes: Routes = [
  { path: '', component: AsyncComponent },
  { path: 'obs&prom', component: ObservablePromiseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncRoutingModule { }
