import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  legends: string[] = [
    "Cristiano Ronaldo",
    "Karin Benzema",
    "zinedine zidane",
    "Marcelo"
  ];

  crack = {
    name: "Ronaldo",
    nickname: "El Fenómeno"
  };

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
