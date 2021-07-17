import { Component } from '@angular/core';
import { randomColor } from 'src/shared/random-color';
import { uniqueId } from 'src/shared/unique-id';
import { IBox, ILog } from './app.component.d';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boxr';

  keyboardEventsEnabled = true;

  /**
   * Array to contain the state of boxes
   */
  boxes: IBox[] = [];

  _logs: ILog[] = [];

  addBox() {
    const bgColor = randomColor();
    const boxId = uniqueId();

    this._logs.push({
      action: 'CREATED',
      boxId,
    });
  }

  removeBox() {}

  toggleKeyboardControls() {
    this.keyboardEventsEnabled = !this.keyboardEventsEnabled;
  }
}
