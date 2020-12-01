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
  cards:Card[] = [] ;
  private cart:Card[]=[]
  phonedIsFull = new BehaviorSubject<boolean>(false) ;
  private changeingInCart = new BehaviorSubject<Card[]>(null) ;
private sumPrice = 0;

  
  constructor(private data:HttpService) { 
    this.refresh()
  }

  refresh(){
    this.data.getAllPhones()
    .subscribe(
      (cards: Card[]) => {
        this.isDataReady = true
          this.cards = cards ;
             this.phonedIsFull.next(this.isDataReady) ;      
      },)  
  }

  addCard(card:Card){
   let a= this.cart.filter(val=>card.id==val.id)
   if(a.length<1){
    this.cart.push(card)
    this.sumPrice+=card.price;
    this.changeingInCart.next(this.cart)
    alert('הכרטיס נוסף לעגלה')
  }
  else 
  alert('הכרטיס כבר קיים בעגלה')
  }

  chengeCart(){
    return this.changeingInCart.asObservable()
  }

  deleteFromCart(id){
     
    let cardDel =this.cart.filter((p)=>p.id == id);
    this.cart= this.cart.filter((p)=>p.id != id);
    this.sumPrice -=cardDel[0].price
     console.log(cardDel);
     
     this.changeingInCart.next(this.cart); 
  }
  getSumPrice(){
    let sum = this.sumPrice
    return sum;
  }
}
