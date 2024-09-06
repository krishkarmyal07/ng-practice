import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmulatedComponent } from './emulated/emulated.component';
import { NoneComponent } from './none/none.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { ViewEncapsulationComponent } from './view-encapsulation.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    component: ViewEncapsulationComponent
  }
]

@NgModule({
  declarations: [
    ViewEncapsulationComponent,
    EmulatedComponent,
    NoneComponent,
    ShadowDomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ViewEncapsulationModule { }
