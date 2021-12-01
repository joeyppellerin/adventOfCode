import DATA_JOEY from './data-trois-joey';
import DATA_TOM from './data-trois-tom';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class EtapeTroisUnService {
  // public DATA = [...DATA_TOM];
  public DATA = [...DATA_JOEY];

  private readonly DEPLACEMENT_DROIT = 3;
  private readonly TREE = '#';

  constructor() { }

  public getReponse(): string {
    let treesCount = 0;
    let positionX = 0;

    for(let y = 0; y < this.DATA.length; y++) {
      if(this.DATA[y][positionX] === this.TREE) {
        treesCount++;
      }

      positionX += this.DEPLACEMENT_DROIT;
      const positionDifferenceLenght = positionX - this.DATA[y].length;
      if(positionDifferenceLenght >= 0) positionX = positionDifferenceLenght;
    }

    return treesCount.toString();
  }
}
