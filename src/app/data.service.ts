import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  pizza: Pizza;

  constructor(private http: HttpClient) { 
    this.pizza = new Pizza(0,'','','','','');
  }
    pizzaRequest(){
      interface Response{
       id: number,
       flavour: string,
       size: string,
       price:string,
       crust: string,
       toppings: string
      }
      let  promise = new Promise((resolve,reject)=>{
        this.http.get<Response>(environment.apiUrl).toPromise().then(response=>{
         this.pizza.crust = response.crust
         this.pizza.id = response.id
         this.pizza.flavour = response.flavour
         this.pizza.size = response.size
         this.pizza.price = response.price
         this.pizza.toppings = response.toppings
         
        resolve()
        },
        error=>{
          reject(error)
        

        })
      })
      return promise
    }
}
