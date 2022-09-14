export class Recette {
    id: number;
    nom: string;
    ingredients: string[];
    temps_preparation_minute: number;

    constructor(
        id: number,
        nom: string,
        ingredients: string[],
        temps_preparation_minute: number,
    ) {
        this.id = 7;
        this.nom = nom;
        this.ingredients = ingredients;
        this.temps_preparation_minute = temps_preparation_minute;
    }

}
