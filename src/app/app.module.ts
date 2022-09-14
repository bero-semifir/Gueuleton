import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetteService } from './services/recette.service';
import { RecetteComponent } from './recette/recette.component';

import { HttpClientModule } from '@angular/common/http';
import { RecetteFormComponent } from './recette/recette-form/recette-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecetteComponent,
    RecetteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RecetteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
