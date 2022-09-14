import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteFormComponent } from './recette/recette-form/recette-form.component';
import { RecetteComponent } from './recette/recette.component';

const routes: Routes = [
  { path: "recettes", children:
  [
    { path:"", component: RecetteComponent },
    { path:"new", component: RecetteFormComponent },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
