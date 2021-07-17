import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ILog } from '../../app.component.d';

@Component({
  selector: 'app-log-area',
  templateUrl: './log-area.component.html',
  styleUrls: ['./log-area.component.css']
})
export class LogAreaComponent implements OnInit {
  @ViewChild('div')
  eventsArea!: HTMLDivElement;

  @Input() logs: ILog[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
