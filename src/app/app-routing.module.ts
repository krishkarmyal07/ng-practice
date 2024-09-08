import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: 'main/pipes', loadChildren: () => import('./main/pipes/pipes.module').then(m => m.PipesModule) },
  { path: 'main/constructor-oninit', loadChildren: () => import('./main/constructor-oninit/constructor-oninit.module').then(m => m.ConstructorOninitModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
