import { AdventOfCode } from 'src/app/models/advent-of-code';
import { EtapeUnPartUnService } from '../2019/etape-un-part-un.service';
import { Injectable } from '@angular/core';
import { EtapeUnPartDeuxService } from '../2019/etape-un-part-deux.service';
import { EtapeDeuxPartUnService } from '../2019/etape-deux-part-un.service';
import { EtapeDeuxPartDeuxService } from '../2019/etape-deux-part-deux.service';

@Injectable({
  providedIn: 'root'
})
export class GestionAdventOfCodeService {
  private listeAdventOfCode: AdventOfCode[];

  constructor(
    private readonly etapeUnPartUnService: EtapeUnPartUnService,
    private readonly etapeUnPartDeuxService: EtapeUnPartDeuxService,
    private readonly etapeDeuxPartUnService: EtapeDeuxPartUnService,
    private readonly etapeDeuxPartDeuxService: EtapeDeuxPartDeuxService
  ) {
    this.listeAdventOfCode = [];
    this.listeAdventOfCode.push(new AdventOfCode('2019', this.generateAdventOfCode2019()));
  }

  public getListeAdventOfCode(): AdventOfCode[] {
    return this.listeAdventOfCode;
  }

  private generateAdventOfCode2019(): string[] {
    const listeReponses = [];
    listeReponses.push(this.etapeUnPartUnService.getReponse());
    listeReponses.push(this.etapeUnPartDeuxService.getReponse());
    listeReponses.push(this.etapeDeuxPartUnService.getReponse());
    listeReponses.push(this.etapeDeuxPartDeuxService.getReponse());
    return listeReponses;
  }
}
