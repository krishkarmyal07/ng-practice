import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full",
  },
  { 
    path: '', 
    component: MainComponent,
    children:[
      {
        path: 'data-binding',
        component: DataBindingComponent
      }, 
      { 
        path: 'view-encapsulation', loadChildren: () => import('./view-encapsulation/view-encapsulation.module').then(m => m.ViewEncapsulationModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
