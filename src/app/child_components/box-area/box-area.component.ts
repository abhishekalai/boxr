import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { greaterOf, lesserOf, uniqueId } from 'src/shared/unique-id';
import { IBox } from '../../app.component.d';

export interface IMaxDimensions {
  maxHeight: number;
  maxWidth: number;
}

@Component({
  selector: 'app-box-area',
  templateUrl: './box-area.component.html',
  styleUrls: ['./box-area.component.css'],
})
export class BoxAreaComponent implements OnInit, AfterViewInit {
  @Input() boxes: IBox[] = [];

  @Input() keyboardEventsEnabled!: boolean;

  boxAreaId = 'boxArea_'.concat(uniqueId().toString());

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    document.onkeydown = (event) => {
      if (!this.keyboardEventsEnabled) {
        return;
      }

      const selectedBoxIndex = this.boxes.findIndex(
        (bx) => bx.selected === true
      );

      if (selectedBoxIndex < 0) {
        return;
      }

      const currentY = this.boxes[selectedBoxIndex].position.y;
      const currentX = this.boxes[selectedBoxIndex].position.x;

      // For Delete Key Press
      if (event.code === 'Delete') {
        this.boxes.splice(selectedBoxIndex, 1);
      }

      // For 'W' Key Press
      if (event.code === 'KeyW' || event.code === 'ArrowUp') {
        this.boxes[selectedBoxIndex].position.y = greaterOf(
          0,
          currentY - (event.shiftKey ? 5 : 1)
        );
      }

      // For 'A' Key Press
      if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        this.boxes[selectedBoxIndex].position.x = greaterOf(
          0,
          currentX - (event.shiftKey ? 5 : 1)
        );
      }

      // For 'S' Key Press
      if (event.code === 'KeyS' || event.code === 'ArrowDown') {
        this.boxes[selectedBoxIndex].position.y = lesserOf(
          500,
          currentY + (event.shiftKey ? 5 : 1)
        );
      }

      // For 'D' Key Press
      if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        this.boxes[selectedBoxIndex].position.x = lesserOf(
          800,
          currentX + (event.shiftKey ? 5 : 1)
        );
      }
    };
  }

  selectBox(id: IBox['id']) {
    this.boxes.forEach((bx) => {
      bx.selected = false;
      if (bx.id === id) {
        bx.selected = true;
      }
    });
  }

  getBorderColor(boxState: IBox) {
    return boxState.selected ? '2px solid #0047AB' : '2px solid '.concat(boxState.bgColor);
  }

  getBoxWidth(boxState: IBox) {
    return boxState.selected ? '96px' : '100px';
  }

  getBoxHeight(boxState: IBox) {
    return boxState.selected ? '96px' : '100px';
  }
}
