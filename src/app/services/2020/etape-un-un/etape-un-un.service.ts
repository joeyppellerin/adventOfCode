import DATA_JOEY from './data-joey-un-un';
import DATA_TOM from './data-tom-un-un';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class EtapeUnUnService {

  public DATA = [...DATA_TOM];
  // public DATA = [...DATA_JOEY];

  constructor() {}

  public getReponse(): string {
    let i = 0;
    while (i < this.DATA.length) {
      let j = 0
      while (j < this.DATA.length) {
        const sum = this.DATA[i]+ this.DATA[j];
        if (sum === 2020) {
          return (this.DATA[i] * this.DATA[j]).toString();
        }
        j++;
      }
      i++;
    }

    return null;
  }

}
