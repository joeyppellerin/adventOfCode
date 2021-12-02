import { AdventOfCode } from 'src/app/models/advent-of-code';
import { GestionReponsesVingtVingtService } from './../2020/gestion-reponses-vingt-vingt.service';
import { GestionnaireReponsesService } from './../2021/gestionnaire-reponses.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionAdventOfCodeService {
  private listeAdventOfCode: Array<AdventOfCode>;

  constructor(
    private readonly gestionReponsesVingtVingtService: GestionReponsesVingtVingtService,
    private readonly gestionnaireReponsesService:GestionnaireReponsesService,
  ) {
    this.listeAdventOfCode = new Array<AdventOfCode>();
    this.listeAdventOfCode.push(...this.gestionnaireReponsesService.getListeAdventOfCode());
  }

  public getListeAdventOfCode(): Array<AdventOfCode> {
    return this.listeAdventOfCode;
  }

}
