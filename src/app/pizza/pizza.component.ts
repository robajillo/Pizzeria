import { Pizza } from './../pizza';
import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizza: Pizza;
  

  constructor(public Service: DataService ) { }

  pizzaRequest()

  ngOnInit(): void {
    this.dataService.pizzaRequest()
  }

}
