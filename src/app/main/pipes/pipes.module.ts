import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe-component/filter.pipe';
import { ImpureFilterPipe } from './pipe-component/impure-filter.pipe';


@NgModule({
  declarations: [
    PipesComponent,
    PipeComponentComponent,
    FilterPipe,
    ImpureFilterPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    FormsModule
  ]
})
export class PipesModule { }
