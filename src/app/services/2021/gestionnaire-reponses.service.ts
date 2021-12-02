import { AdventOfCode } from 'src/app/models/advent-of-code';
import { DeuxDecembreAService } from 'src/app/services/2021/deux-decembre/deux-decembre-a.service';
import { DeuxDecembreBService } from 'src/app/services/2021/deux-decembre/deux-decembre-b.service';
import { Injectable } from '@angular/core';
import { SousReponses } from 'src/app/models/reponses';
import { UnDecembreAService } from 'src/app/services/2021/un-decembre/un-decembre-a.service';
import { UnDecembreBService } from 'src/app/services/2021/un-decembre/un-decembre-b.service';

@Injectable({
  providedIn: 'root',
})
export class GestionnaireReponsesService {
  private listeAdventOfCode: Array<AdventOfCode>;

  constructor(
    private readonly unDecembreAService: UnDecembreAService,
    private readonly unDecembreBService: UnDecembreBService,
    private readonly deuxDecembreAService: DeuxDecembreAService,
    private readonly deuxDecembreBService: DeuxDecembreBService
  ) {
    this.listeAdventOfCode = new Array();
    this.listeAdventOfCode.push(new AdventOfCode('2021', this.generateAdventOfCode2021()));
  }

  public getListeAdventOfCode(): Array<AdventOfCode> {
    return this.listeAdventOfCode;
  }

  private generateAdventOfCode2021(): Array<SousReponses> {
    const listeReponses = new Array<SousReponses>();
    listeReponses.push(
      this.getSousReponses(this.unDecembreAService.getResponse(),
      this.unDecembreBService.getResponse()), this.getSousReponses(this.deuxDecembreAService.getResponse(), this.deuxDecembreBService.getResponse())
    );

    return listeReponses;
  }

  private getSousReponses(reponseUn: string, reponseDeux: string): SousReponses {
    return new SousReponses([reponseUn, reponseDeux]);
  }
}
