import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor(private service:FruitsService) { }


  ngOnInit() {
  }

  vegetables;
  fruits;

  getFruits(){
    this.fruits=this.service.getFruits();
  }
  
  getvegetables(){
  
    this.vegetables=this.service.getvegetables();
  }

}
