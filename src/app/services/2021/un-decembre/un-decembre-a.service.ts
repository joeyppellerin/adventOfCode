import DATA from './data/data-a.js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnDecembreAService {
  public data = DATA;

  constructor() {}

  public getResponse(): string {
    return this.data.filter((mesure, index) => mesure > this.data[index - 1]).length.toString();
  }
}
