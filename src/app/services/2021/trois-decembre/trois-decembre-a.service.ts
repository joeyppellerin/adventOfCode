import DATA from './data/data-a.js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TroisDecembreAService {
  private data = DATA;

  constructor() {}

  public getResponse(): string {
    let epsilon = '';
    let gamma = '';
    // const tempData = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'];

    let listBinaires = [];
    this.data.forEach((ligneBinaire) => {
      ligneBinaire.split('').forEach((element, i) => {
        if (listBinaires.length < ligneBinaire.length) {
          listBinaires.push(element);
        } else {
          listBinaires[i] += element;
        }
      });
    });

    listBinaires.forEach((element) => {
      if (element.length - element.match(/0/g).length < element.match(/0/g).length) {
        gamma += '1';
        epsilon += '0';
      } else {
        gamma += '0';
        epsilon += '1';
      }
    });

    return (parseInt(gamma, 2) * parseInt(epsilon, 2)).toString();
  }
}
