import DATA_HUGUES from '../../data/2019/hugues/etape2.js';
import DATA_JOEY from '../../data/2019/joey/etape2.js';
import { Etape } from './../etape';
import { Injectable } from '@angular/core';
import { OperationMathEnum } from './../../models/2019/operation.enum';

@Injectable({ providedIn: 'root' })
export class EtapeDeuxPartDeuxService implements Etape {
  private readonly nombreReference: number = 19690720;

  constructor() {}

  public getReponse(): string {
    for (let x = 0; x < 100; x++) {
      for (let y = 0; y < 100; y++) {
        if (this.executerOperations(x, y)) {
          return `${x}${y}`;
        }
      }
    }

    return 'Aucune réponse trouvée.';
  }

  private executerOperations(x: number, y: number): boolean {
    // const copieCodeList = [...DATA_HUGUES];
    const codeList = [...DATA_JOEY];
    codeList[1] = x;
    codeList[2] = y;

    return this.calculerResultat(codeList) === this.nombreReference;
  }

  private calculerResultat(codeList: number[]): number {
    const BLOC_LENGTH = 4;

    let i = 0;
    while (i < codeList.length) {
      const codeOperation = codeList[i];
      const noun = codeList[i + 1];
      const verb = codeList[i + 2];
      const indexToOverride = codeList[i + 3];

      if (codeOperation === OperationMathEnum.ADDITION) {
        codeList[indexToOverride] = codeList[noun] + codeList[verb];
      } else {
        if (codeOperation === OperationMathEnum.MULTIPLICATION) {
          codeList[indexToOverride] = codeList[noun] * codeList[verb];
        } else {
          i = codeList.length;
        }
      }

      i += BLOC_LENGTH;
    }

    return codeList[0];
  }
}
