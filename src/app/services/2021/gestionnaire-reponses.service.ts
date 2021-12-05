import { AdventOfCode } from 'src/app/models/advent-of-code';
import { DeuxDecembreAService } from 'src/app/services/2021/deux-decembre/deux-decembre-a.service';
import { DeuxDecembreBService } from 'src/app/services/2021/deux-decembre/deux-decembre-b.service';
import { Injectable } from '@angular/core';
import { QuatreDecembreAService } from 'src/app/services/2021/quatre-decembre/quatre-decembre-a.service';
import { QuatreDecembreBService } from 'src/app/services/2021/quatre-decembre/quatre-decembre-b.service';
import { SousReponses } from 'src/app/models/reponses';
import { TroisDecembreAService } from 'src/app/services/2021/trois-decembre/trois-decembre-a.service';
import { TroisDecembreBService } from 'src/app/services/2021/trois-decembre/trois-decembre-b.service';
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
    private readonly deuxDecembreBService: DeuxDecembreBService,
    private readonly troisDecembreAService: TroisDecembreAService,
    private readonly troisDecembreBService: TroisDecembreBService,
    private readonly quatreDecembreAService: QuatreDecembreAService,
    private readonly quatreDecembreBService: QuatreDecembreBService
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
      this.getSousReponses(this.unDecembreAService.getResponse(), this.unDecembreBService.getResponse()),
      this.getSousReponses(this.deuxDecembreAService.getResponse(), this.deuxDecembreBService.getResponse()),
      this.getSousReponses(this.troisDecembreAService.getResponse(), this.troisDecembreBService.getResponse()),
      this.getSousReponses(this.quatreDecembreAService.getResponse(), this.quatreDecembreBService.getResponse())
    );

    return listeReponses;
  }

  private getSousReponses(reponseUn: string, reponseDeux: string): SousReponses {
    return new SousReponses([reponseUn, reponseDeux]);
  }
}
