import { Component, Input, OnInit } from '@angular/core';
import { uniqueId } from 'src/shared/unique-id';
import { IBox } from '../../app.component.d';

export interface IMaxDimensions {
  maxHeight: number;
  maxWidth: number;
}

@Component({
  selector: 'app-box-area',
  templateUrl: './box-area.component.html',
  styleUrls: ['./box-area.component.css']
})
export class BoxAreaComponent implements OnInit {
  @Input() boxes: IBox[] = [];

  @Input() keyboardEventsEnabled!: boolean;

  boxAreaId = 'boxArea_'.concat(uniqueId().toString());

  constructor() {}

  ngOnInit(): void {}

  _maxHeight!: number;
  set maxHeight(val: number) {
    this._maxHeight = val;
  }

  get maxHeight () {
    return this._maxHeight;
  }

  _maxWidth!: number;
  set maxWidth(val: number) {
    this._maxWidth = val;
  }

  get maxWidth () {
    return this._maxWidth;
  }

  selectBox(id: IBox['id']) {
    this.boxes.forEach(bx => {
      bx.selected = false;
      if (bx.id === id) {
        bx.selected = true;
      }
    });
  }

  getBorderColor(boxState: IBox) {
    if (boxState.selected) {
      return '2px solid #0047AB';
    }
    return '2px solid '.concat(boxState.bgColor);
  }

  getBoxWidth(boxState: IBox) {
    if (boxState.selected) {
      return '96px';
    }
    return '100px';
  }
  getBoxHeight(boxState: IBox) {
    if (boxState.selected) {
      return '96px';
    }
    return '100px';
  }
}
