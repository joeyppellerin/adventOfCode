import { SousReponses } from 'src/app/models/reponses';
import { AdventOfCode } from 'src/app/models/advent-of-code';
import { EtapeDeuxDeuxService } from './../2020/etape-deux-un/etape-deux-deux.service';
import { EtapeDeuxUnService } from './../2020/etape-deux-un/etape-deux-un.service';
import { EtapeTroisDeuxService } from 'src/app/services/2020/etape-trois/etape-trois-deux.service';
import { EtapeTroisUnService } from 'src/app/services/2020/etape-trois/etape-trois-un.service';
import { EtapeUnDeuxService } from 'src/app/services/2020/etape-un-deux/etape-un-deux.service';
import { EtapeUnUnService } from 'src/app/services/2020/etape-un-un/etape-un-un.service';
import { Injectable } from '@angular/core';
import { SousReponses } from './../../models/reponses';

@Injectable({
  providedIn: 'root'
})
export class GestionAdventOfCodeService {
  private listeAdventOfCode: Array<AdventOfCode>;

  constructor(
    private readonly etapeUnUnService: EtapeUnUnService,
    private readonly etapeUnDeuxService: EtapeUnDeuxService,
    private readonly etapeDeuxUnService: EtapeDeuxUnService,
    private readonly etapeDeuxDeuxService: EtapeDeuxDeuxService,
    private readonly etapeTroisUnService: EtapeTroisUnService,
    private readonly etapeTroisDeuxService: EtapeTroisDeuxService,
  ) {
    this.listeAdventOfCode = new Array();
    this.listeAdventOfCode.push(new AdventOfCode('2020', this.generateAdventOfCode2020()));
  }

  public getListeAdventOfCode(): AdventOfCode[] {
    return this.listeAdventOfCode;
  }

  private generateAdventOfCode2020(): Array<SousReponses> {
    const listeReponses = [];
    listeReponses.push(this.etapeUnUnService.getReponse());
    listeReponses.push(this.etapeUnDeuxService.getReponse());
    listeReponses.push(this.etapeDeuxUnService.getReponse());
    listeReponses.push(this.etapeDeuxDeuxService.getReponse());
    listeReponses.push(this.etapeTroisUnService.getReponse());
    listeReponses.push(this.etapeTroisDeuxService.getReponse());

    return listeReponses;
  }

}
