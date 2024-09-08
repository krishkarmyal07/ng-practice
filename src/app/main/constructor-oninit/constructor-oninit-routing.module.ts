import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructorOninitComponent } from './constructor-oninit.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: ConstructorOninitComponent },
  {path: 'parent', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructorOninitRoutingModule { }
