import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { Card } from '../models/card.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  
isDataReady:boolean = false
  phones:Card[] = [] ;
  private cart:Card[]=[]
  phonedIsFull = new BehaviorSubject<boolean>(false) ;
  private changeingInCart = new BehaviorSubject<Card[]>(null) ;

  
  constructor(private data:HttpService) { 
    this.data.getAllPhones()
    .subscribe(
      (phone: Card[]) => {
        this.isDataReady = true
          this.phones = phone ;
             this.phonedIsFull.next(this.isDataReady) ;      
      },)    
  }

  addCard(card:Card){
    this.cart.push(card)
    this.changeingInCart.next(this.cart)
  }

  chengeCart(){
    return this.changeingInCart.asObservable()
  }

  deleteFromCart(id){
     this.cart= this.cart.filter((p)=>p.id != id);
     this.changeingInCart.next(this.cart); 
  }
}
