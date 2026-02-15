import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  getAll(){
    debugger
    console.log("test");
  }

  ngOninit(){
    this.getAll();
  }
}
