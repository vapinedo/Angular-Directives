import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  showPastLegends: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLegends() {
    this.showPastLegends = !this.showPastLegends;
  }

}
