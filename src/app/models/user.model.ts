export class User {
    firstname: string ;
    lastname: string;
    email: string ;
    age: number ;
    token?:string
    password?:string
    admin?:boolean

    constructor(firstname:string, lastname: string, email: string, age: number, token?:string,admin?:boolean){
        this.firstname = firstname ;
        this.lastname = lastname ;
        this.email = email ;
        this.age = age ;
        this.token = token;
        this.admin=admin
    }
}
