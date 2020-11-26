export class Card {
    location: string ;
    model: string;
    screenSize: number ;
    price: number ;
    giga?: number ;
    imagePath: string ;
    shortDetails: string ;
    category:string
    id:number;

    constructor(location:string, model: string, screenSize: number, price: number, category:string, imagePath: string, shortDetails:string,id:number){
        this.location = location ;
        this.model = model ;
        this.price = price ;
        this.imagePath = imagePath ;
        this.shortDetails = shortDetails ;
        this.category=category
        this.id = id ;
    }
}
