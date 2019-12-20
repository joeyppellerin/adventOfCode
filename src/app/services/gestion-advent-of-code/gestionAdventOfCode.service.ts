import { AdventOfCode } from 'src/app/models/advent-of-code';
import { EtapeUnService } from '../2019/etape-un.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionAdventOfCodeService {
  private listeAdventOfCode: AdventOfCode[];

  constructor(private readonly etapeUnService: EtapeUnService) {
    this.listeAdventOfCode = [];
    this.listeAdventOfCode.push(new AdventOfCode('2019', this.generateAdventOfCode2019()));
  }

  public getListeAdventOfCode(): AdventOfCode[] {
    return this.listeAdventOfCode;
  }

  private generateAdventOfCode2019(): string[] {
    const listeReponses = [];
    // listeReponses.push(this.etapeUnService.getReponse());

    return listeReponses;
  }

}
