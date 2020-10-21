import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { Phone } from '../models/phone.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  
isDataReady:boolean = false
  phones:Phone[] = [] ;
  private cart:Phone[]=[]
  phonedIsFull = new BehaviorSubject<boolean>(false) ;
  private addedToCart = new BehaviorSubject<Phone[]>(null) ;

  
  constructor(private data:HttpService) { 
    this.data.getAllPhones()
    .pipe( map(
      data => {
        for(let p in data){
          return data[p]
        }
      }
    ))
    .subscribe(
      (phone: Phone[]) => {
        this.isDataReady = true
          this.phones = phone ;
             this.phonedIsFull.next(this.isDataReady) ;      
      },)    
  }

  addCard(card:Phone){
    this.cart.push(card)
    this.addedToCart.next(this.cart)
  }

  chengeCart(){
    return this.addedToCart.asObservable()
  }
}
