import { ChampsPasseportEnum } from './models/champs-passeport.enum';
import DATA_JOEY from './models/data-joey-quatre';
import DATA_TOM from './models/data-tom-quatre';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class EtapeQuatreUnService {
  // public DATA = DATA_TOM;
  public DATA = DATA_JOEY;

  constructor() { }

  public getReponse(): string {
    let listePasseport = this.construireListePasseport();

    let compteur = 0;
    for (let passeport of listePasseport) {
      let listeChampsPasseport = passeport.split(' ');
      if (this.estPasseportValide(listeChampsPasseport)) {
        compteur++;
      }
    }

    return compteur.toString();
  }

  private construireListePasseport(): Array<string> {
    let listePasseport = new Array<string>();
    let passeport = '';

    for (let line of this.DATA) {
      if (line) {
        passeport += passeport ? ` ${line}` : line;
      } else {
        listePasseport.push(passeport);
        passeport = '';
      }
    }

    return listePasseport;
  }

  private estPasseportValide(listeChampsPasseport: Array<string>): boolean {
    return listeChampsPasseport.length === 8 || (listeChampsPasseport.length === 7 && this.contientChampsCid(listeChampsPasseport));
  }

  private contientChampsCid(listeChampsPasseport: Array<string>): boolean {
    for (let i = 0; i < listeChampsPasseport.length; i++) {
      if (listeChampsPasseport[i].split(':')[0] === ChampsPasseportEnum.CID) {
        return false;
      }
    }

    return true;
  }
}
