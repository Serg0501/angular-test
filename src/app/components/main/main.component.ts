import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  public gridListOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAdding() {
    this.gridListOpen = true;
  }

  closeForm() {
    this.gridListOpen = false;
  }

}
