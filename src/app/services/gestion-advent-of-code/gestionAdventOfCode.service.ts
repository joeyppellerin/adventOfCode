import { AdventOfCode } from 'src/app/models/advent-of-code';
import { Injectable } from '@angular/core';
import { SousReponses } from './../../models/reponses';

@Injectable({
  providedIn: 'root'
})
export class GestionAdventOfCodeService {
  private listeAdventOfCode: Array<AdventOfCode>;

  constructor() {
    this.listeAdventOfCode = new Array();
    this.listeAdventOfCode.push(new AdventOfCode('2019', this.generateAdventOfCode2019()));
  }

  public getListeAdventOfCode(): AdventOfCode[] {
    return this.listeAdventOfCode;
  }

  private generateAdventOfCode2019(): Array<SousReponses> {
    const listeReponses = new Array<SousReponses>();

    return listeReponses;
  }

}
