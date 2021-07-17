import { Component } from '@angular/core';
import { randomColor, randomIntFromInterval } from 'src/shared/random';
import { uniqueId } from 'src/shared/unique-id';
import { IBox } from './app.component.d';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'boxr';

  keyboardEventsEnabled = true;

  private _xInit = 0;
  get xInit() {
    this._xInit += 5;
    return this._xInit;
  }

  private _yInit = 0;
  get yInit() {
    this._yInit += 5;
    return this._yInit;
  }

  private _zIndex = 0;

  get zIndex() {
    this._zIndex += 1;
    return this._zIndex;
  }

  /**
   * Array to contain the state of boxes
   */
  boxes: IBox[] = [];

  addBox() {
    const bgColor = randomColor();
    const boxId = uniqueId();

    this.boxes.push({
      bgColor: '#'.concat(bgColor),
      id: boxId,
      position: {
        x: randomIntFromInterval(0, 800),
        y: randomIntFromInterval(0, 500),
      },
      zIndex: this.zIndex,
      selected: false,
    });
  }

  toggleKeyboardControls() {
    this.keyboardEventsEnabled = !this.keyboardEventsEnabled;
  }

  ngAfterViewInit() {
    const appReference = this;
    document.onkeydown = (event) => {
      if (!appReference.keyboardEventsEnabled) {
        return;
      }

      const selectedBoxIndex = this.boxes.findIndex(
        (bx) => bx.selected === true
      );

      if (selectedBoxIndex < 0) {
        return;
      }

      // For Delete Key Press
      if (event.code === 'Delete') {
        this.boxes.splice(selectedBoxIndex, 1);
      }

      // For 'W' Key Press
      if (event.code === 'KeyW' || event.code === 'ArrowUp') {
        this.boxes[selectedBoxIndex].position.y -= event.shiftKey ? 5 : 1;
      }

      // For 'A' Key Press
      if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        this.boxes[selectedBoxIndex].position.x -= event.shiftKey ? 5 : 1;
      }

      // For 'S' Key Press
      if (event.code === 'KeyS' || event.code === 'ArrowDown') {
        this.boxes[selectedBoxIndex].position.y += event.shiftKey ? 5 : 1;
      }

      // For 'D' Key Press
      if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        this.boxes[selectedBoxIndex].position.x += event.shiftKey ? 5 : 1;
      }
    };
  }
}
