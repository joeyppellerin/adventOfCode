import DATA from './data/data-a.js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TroisDecembreBService {
  private data = DATA;

  constructor() {}

  public getResponse(): string {
    // const refArray = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'];
    let oxygeneRating = 0;
    let co2Scrubber = 0;

    oxygeneRating = this.getRatings(true, this.data);
    co2Scrubber = this.getRatings(false, this.data);

    return (oxygeneRating * co2Scrubber).toString();
  }

  private getRatings(isOxygeneRatings: boolean, refArray: Array<string>): number {
    let resultArray = [...refArray];
    const nombreIteration = resultArray[0].length;
    for (let i = 0; i < nombreIteration; i++) {
      let compteurUn = 0;
      let compteurZero = 0;
      let listIndexUn = [];
      let listIndexZero = [];

      for (let [y, nombre] of resultArray.entries()) {
        if (nombre[i] === '1') {
          compteurUn++;
          listIndexUn.push(y);
        } else {
          compteurZero++;
          listIndexZero.push(y);
        }
      }

      if (listIndexZero.length > 0 && listIndexUn.length > 0) {
        const tempArray = [...resultArray];
        resultArray = [];
        if (isOxygeneRatings) {
          if (compteurUn > compteurZero || compteurUn === compteurZero) {
            resultArray = this.cleanArray(listIndexUn, tempArray);
          } else {
            resultArray = this.cleanArray(listIndexZero, tempArray);
          }
        } else {
          if (compteurZero < compteurUn || compteurZero === compteurUn) {
            resultArray = this.cleanArray(listIndexZero, tempArray);
          } else {
            resultArray = this.cleanArray(listIndexUn, tempArray);
          }
        }
      }
    }

    return resultArray.length ? parseInt(resultArray[0], 2) : 0;
  }

  private cleanArray(indexArray: Array<number>, refArray: Array<string>): Array<string> {
    let resultArray = [];
    for (let index of indexArray) {
      resultArray.push(refArray[index]);
    }

    return resultArray;
  }
}
