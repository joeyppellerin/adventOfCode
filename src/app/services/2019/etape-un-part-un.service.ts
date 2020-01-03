import DATA_HUGUES from '../../data/2019/hugues/etape1.js';
import DATA_JOEY from '../../data/2019/joey/etape1.js';
import { Etape } from '../etape';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtapeUnPartUnService implements Etape {
  private data: number[];

  constructor() {
    // this.data = DATA_HUGUES;
    this.data = DATA_JOEY;
  }

  public getReponse(): string {
    let result = 0;
    this.data.forEach(element => {
      result += Math.floor(element / 3) - 2;
    });

    return result.toString();
  }
}
