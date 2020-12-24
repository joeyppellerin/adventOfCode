import DATA_JOEY from './data-joey-deux.js';
import DATA_TOM from './data-tom-deux.js';
import { Injectable } from '@angular/core';
import { PasswordSecurity } from 'src/app/models/password-security.js';

@Injectable({providedIn: 'root'})
export class EtapeDeuxUnService {
  // public DATA = [...DATA_TOM];
  public DATA = [...DATA_JOEY];

  constructor() { }

  public getReponse(): string {
    let count = 0;
    this.DATA.forEach(element => {
      const passwordSecurity = new PasswordSecurity(element);
      if (passwordSecurity.isPasswordValid()) {
        count++;
      }
    });

    return count.toString();
  }
}
