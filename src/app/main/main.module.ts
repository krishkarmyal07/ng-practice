import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    MainComponent,
    DataBindingComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
