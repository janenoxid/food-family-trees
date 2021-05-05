export class Ingredient{
    id: number;
    name: string;
    image: string;
    naturalResources: string[];
    constructor(id: number, name: string, image: string, naturalResources: string[]){
        this.id = id;
        this.name = name; 
        this.image = image;
        this.naturalResources = naturalResources;
    }
}