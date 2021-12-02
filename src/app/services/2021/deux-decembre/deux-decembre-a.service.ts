import DATA from './data/data-a.js';
import { Injectable } from '@angular/core';
import { PositionEnum } from 'src/app/services/2021/deux-decembre/data/models/position-enum.js';

@Injectable({
  providedIn: 'root',
})
export class DeuxDecembreAService {
  private data = DATA;

  constructor() {}

  public getResponse(): string {
    let horizontal = 0;
    let depth = 0;
    let list = this.data;

    for (let element of list) {
      const elements = element.split(' ');
      if (elements[0] === PositionEnum.FORWARD) {
        horizontal += +elements[1];
      } else if (elements[0] === PositionEnum.DOWN) {
        depth += +elements[1];
      } else if (elements[0] === PositionEnum.UP) {
        const depthTemp = depth - +elements[1];
        depth = depthTemp < 0 ? 0 : depthTemp;
      }
    }

    return (horizontal * depth).toString();
  }
}
