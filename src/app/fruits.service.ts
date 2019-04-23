import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }

vegetables=["carrot", "onion"];
fruits=["apple","graphes"];

getFruits(){
  return this.fruits;
}

getvegetables(){

  return this.vegetables;
}

}
