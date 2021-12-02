import DATA from './data/data-a.js';
import { Injectable } from '@angular/core';
import { PositionEnum } from 'src/app/services/2021/deux-decembre/data/models/position-enum.js';

@Injectable({
  providedIn: 'root',
})
export class DeuxDecembreBService {
  private data = DATA;

  constructor() {}

  public getResponse(): string {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    // let list = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
    let list = this.data;

    for (let element of list) {
      const elements = element.split(' ');
      if (elements[0] === PositionEnum.FORWARD) {
        horizontal += +elements[1];
        if (aim > 0) {
          depth += +elements[1] * aim;
        }
      } else if (elements[0] === PositionEnum.DOWN) {
        aim += +elements[1];
      } else if (elements[0] === PositionEnum.UP) {
        aim -= +elements[1];
      }
    }

    return (horizontal * depth).toString();
  }
}
