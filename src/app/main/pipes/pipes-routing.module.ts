import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';

const routes: Routes = [
  { path: '', component: PipesComponent },
  {
    path: 'pipe', component: PipeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
