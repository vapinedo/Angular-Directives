import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // @Input() parentData: string = "";
  @Input("parentData") message: string = "";
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent() {
    this.childEvent.emit("Message from child component");
  }

}
