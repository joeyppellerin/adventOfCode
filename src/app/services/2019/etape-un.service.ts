import { Etape } from './../etape';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtapeUnService implements Etape {
  constructor() { }

  public getReponse(): string {
    return 'Hello world';
  }
}
