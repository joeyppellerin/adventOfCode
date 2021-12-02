import DATA from './data/data-a.js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeuxDecembreAService {
  private data = DATA;

  constructor() { }

  public getResponse(): string {
    return '';
  }
}
