import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = "Add an item";
  goalText: string = "My first life goal";
  // To use the Service, make that array empty
  // goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
  goals = [];

  // change the constructor to use the service
  // constructor() { }
  constructor(private _data: DataService) { }

  ngOnInit() {
    // this.itemCount = this.goals.length;
    // from Service
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText= '';
    this.itemCount = this.goals.length;
    //from Service
    this._data.changeGoal(this.goals);
  }
  removeItem(i){
    this.goals.splice(i, 1);
    //from Service
    this._data.changeGoal(this.goals);
  }

}
