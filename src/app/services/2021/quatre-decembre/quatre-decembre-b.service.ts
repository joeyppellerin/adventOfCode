import DATA from './data/data-bingo.js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuatreDecembreBService {
  private data = DATA;

  constructor() {}

  public getResponse(): string {
    return '';
  }
}
