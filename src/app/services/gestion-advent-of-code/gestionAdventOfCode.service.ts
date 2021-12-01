import { AdventOfCode } from 'src/app/models/advent-of-code';
import { GestionReponsesVingtVingtService } from './../2020/gestion-reponses-vingt-vingt.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionAdventOfCodeService {
  private listeAdventOfCode: Array<AdventOfCode>;

  constructor(
    private readonly gestionReponsesVingtVingtService: GestionReponsesVingtVingtService,
  ) {
    this.listeAdventOfCode = new Array<AdventOfCode>();
    this.listeAdventOfCode.push(...this.gestionReponsesVingtVingtService.getListeAdventOfCode());
  }

  public getListeAdventOfCode(): Array<AdventOfCode> {
    return this.listeAdventOfCode;
  }

}
