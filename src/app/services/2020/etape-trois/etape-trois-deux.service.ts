import DATA_JOEY from './data-trois-joey';
import DATA_TOM from './data-trois-tom';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class EtapeTroisDeuxService {
  public DATA = [...DATA_TOM];
  // public DATA = [...DATA_JOEY];

  private readonly TREE = '#';

  constructor() { }

  public getReponse(): string {
    return (this.countTreesEncounter(1, 1) *
      this.countTreesEncounter(3, 1) *
      this.countTreesEncounter(5, 1) *
      this.countTreesEncounter(7, 1) *
      this.countTreesEncounter(1, 2)).toString();
  }

  private countTreesEncounter(incrementX: number, incrementY: number): number {
    let treesCount = 0;
    let positionX = 0;

    for(let y = 0; y < this.DATA.length; y += incrementY) {
      if(this.DATA[y][positionX] === this.TREE) {
        treesCount++;
      }

      positionX += incrementX;
      const positionDifferenceLenght = positionX - this.DATA[y].length;
      if(positionDifferenceLenght >= 0) positionX = positionDifferenceLenght;
    }

    return treesCount;
  }
}

