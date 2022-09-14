import { Component, OnInit } from '@angular/core';

import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RecetteService } from 'src/app/services/recette.service';
import { Recette } from '../models/recette';

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.scss']
})
export class RecetteFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private recetteService: RecetteService) {
    this.form = new FormGroup({
      nom: new FormControl('', Validators.required),
      ingredients: new FormArray([
        new FormControl(),
      ]),
      temps_preparation_minute: new FormControl('', [Validators.required, Validators.min(1)]),
    })
  }

  ngOnInit(): void { }

  handleSubmit() {
    console.log(this.form);
    if(this.form.valid){
      this.recetteService
      .postRecette(this.form.value)
      .subscribe((resp)=>{
        console.log(resp);
      });
    }
  }

}
