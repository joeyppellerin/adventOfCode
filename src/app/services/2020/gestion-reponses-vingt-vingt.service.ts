import { AdventOfCode } from 'src/app/models/advent-of-code';
import { EtapeDeuxDeuxService } from 'src/app/services/2020/etape-deux/etape-deux-deux.service';
import { EtapeDeuxUnService } from 'src/app/services/2020/etape-deux/etape-deux-un.service';
import { EtapeQuatreUnService } from 'src/app/services/2020/etape-quatre/etape-quatre-un.service';
import { EtapeTroisDeuxService } from 'src/app/services/2020/etape-trois/etape-trois-deux.service';
import { EtapeTroisUnService } from 'src/app/services/2020/etape-trois/etape-trois-un.service';
import { EtapeUnDeuxService } from 'src/app/services/2020/etape-un/etape-un-deux.service';
import { EtapeUnUnService } from 'src/app/services/2020/etape-un/etape-un-un.service';
import { Injectable } from '@angular/core';
import { SousReponses } from 'src/app/models/reponses';

@Injectable({providedIn: 'root'})
export class GestionReponsesVingtVingtService {
  private listeAdventOfCode: Array<AdventOfCode>;

  constructor(
    private readonly etapeUnUnService: EtapeUnUnService,
    private readonly etapeUnDeuxService: EtapeUnDeuxService,
    private readonly etapeDeuxUnService: EtapeDeuxUnService,
    private readonly etapeDeuxDeuxService: EtapeDeuxDeuxService,
    private readonly etapeTroisUnService: EtapeTroisUnService,
    private readonly etapeTroisDeuxService: EtapeTroisDeuxService,
    private readonly etapeQuatreUnService: EtapeQuatreUnService,
  ) {
    this.listeAdventOfCode = new Array();
    this.listeAdventOfCode.push(new AdventOfCode('2020', this.generateAdventOfCode2020()));
  }

  public getListeAdventOfCode(): Array<AdventOfCode> {
    return this.listeAdventOfCode;
  }

  private generateAdventOfCode2020(): Array<SousReponses> {
    const listeReponses = new Array<SousReponses>();
    listeReponses.push(this.getSousReponses(this.etapeUnUnService.getReponse(), this.etapeUnDeuxService.getReponse()));
    listeReponses.push(this.getSousReponses(this.etapeDeuxUnService.getReponse(), this.etapeDeuxDeuxService.getReponse()));
    listeReponses.push(this.getSousReponses(this.etapeTroisUnService.getReponse(), this.etapeTroisDeuxService.getReponse()));
    listeReponses.push(this.getSousReponses(this.etapeQuatreUnService.getReponse(), ''));

    return listeReponses;
  }

  private getSousReponses(reponseUn: string, reponseDeux: string): SousReponses {
    return new SousReponses([reponseUn, reponseDeux]);
  }

}
