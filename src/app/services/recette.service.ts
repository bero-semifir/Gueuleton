import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recette } from '../recette/models/recette';

// DRY: environment.ts contient les variables "d'environnement"
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private http: HttpClient) { }

  // Read
  /**
   * Récupère la liste des recettes
   */
  getRecettes(){
    return this.http.get<Recette[]>(`${environment.api_url}/recettes`);
  }
  // Read 
  /**
   * Récupère la recette avec son id
   * @param id id de la recette
   */
  getRecette(id: number){

  }
  // Create
  postRecette(recette: Recette){
    recette.id = 8;
    return this.http.post(`${environment.api_url}/recettes`, recette);
  }
  // Update
  putRecette(id: number, nouvelleRecette: Recette){

  }
  // Delete
  deleteRecette(id: number){

  }

}
