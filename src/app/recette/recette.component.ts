import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { Recette } from './models/recette';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  recettes: Recette[] = [];
  afficher: boolean = true;

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.recetteService.getRecettes().subscribe((recettes) => {
      console.log(recettes);
      this.recettes = recettes;
    })
  }

  handleClick() {
    alert('Affichage des recettes !')
  }

}
