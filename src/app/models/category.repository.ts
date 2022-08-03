import { Category } from "./category";

export class CategoryRepository{

    categories:Category[];
    constructor(){
        this.categories=[   
            
        {name:"spor",id:1},
        {name:"günlük",id:2},
        {name:"sneaker",id:3},
        {name:"bot",id:4}
        ]
    }
    getCategories(){
        return this.categories;
    }
}