import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
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
        path: 'view-encapsulation', 
        loadChildren: () => import('./view-encapsulation/view-encapsulation.module').then(m => m.ViewEncapsulationModule)
      },
      
      { path: '', 
        loadChildren: () => import('./async/async.module').then(m => m.AsyncModule)
      },
      { path: '', 
        loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
      },
      { path: '', 
        loadChildren: () => import('./constructor-oninit/constructor-oninit.module').then(m => m.ConstructorOninitModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
