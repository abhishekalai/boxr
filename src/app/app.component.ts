import { Component } from '@angular/core';
import { randomColor, randomIntFromInterval } from 'src/shared/random';
import { greaterOf, lesserOf, uniqueId } from 'src/shared/unique-id';
import { IBox } from './app.component.d';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'boxr';

  keyboardEventsEnabled = true;

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
}
