import { Component, Input, OnInit } from '@angular/core';
import { ILog } from '../../app.component.d';

@Component({
  selector: 'app-log-element',
  templateUrl: './log-element.component.html',
  styleUrls: ['./log-element.component.css']
})
export class LogElementComponent implements OnInit {
  @Input() bgColor = '#2693f5';

  @Input() boxId = 0;

  @Input() action: ILog['action'] = 'CREATED';

  constructor() { }

  ngOnInit(): void {
    if (!this.boxId) {
      throw new Error('Cannot Initialize a Log Element without a Box Id');
    }
    if (!this.action) {
      throw new Error('Cannot Initialize a Log Element without an Action Type');
    }
  }

  getBgColor() {
    if (this.action === 'UPDATED') {
      return '#32a0a8';
    } else if (this.action === 'DELETED') {
      return '#e87676';
    }
    return '#89d992';
  }
}
