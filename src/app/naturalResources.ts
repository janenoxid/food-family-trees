export class NaturalResource {
    id: number;
    name: string;
    image: string;
    ingredients: string[];
    constructor(id: number, name: string, image: string, ingredients: string[]){
        this.id = id;
        this.name = name; 
        this.image = image;
        this.ingredients = ingredients;
    }
}