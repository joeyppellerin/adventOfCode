import DATA from './data/data-a.js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnDecembreBService {
  private data = DATA;

  constructor() {}

  public getResponse(): string {
    // this.data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    let compteur = 0;
    let listA = [];
    let listB = [];

    for (let mesure of this.data) {
      if (listA.length < 3) {
        listA.push(mesure);
      } else {
        listB = [listA[1], listA[2], mesure];
        const sumA = listA.reduce((a, b) => a + b);
        const sumB = listB.reduce((a, b) => a + b);
        if (sumA < sumB) {
          compteur++;
        }
        listA = [...listB];
        listB.shift();
      }
    }

    return compteur.toString();
  }
}
