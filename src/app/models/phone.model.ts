export class Phone {
    company: string ;
    model: string;
    screenSize: number ;
    price: number ;
    giga?: number ;
    imagePath: string ;
    shortDetails: string ;
    id:number;

    constructor(company:string, model: string, screenSize: number, price: number, giga: number, imagePath: string, shortDetails:string,id:number){
        this.company = company ;
        this.model = model ;
        this.screenSize = screenSize ;
        this.price = price ;
        this.giga = giga ;
        this.imagePath = imagePath ;
        this.shortDetails = shortDetails ;
        this.id = id ;
    }
}
