import DATA_HUGUES from '../../data/2019/hugues/etape2.js';
import DATA_JOEY from '../../data/2019/joey/etape2.js';
import { Etape } from './../etape';
import { Injectable } from '@angular/core';
import { OperationMathEnum } from './../../models/2019/operation.enum';

@Injectable({ providedIn: 'root' })
export class EtapeDeuxPartUnService implements Etape {
  constructor() {}

  public getReponse(): string {
    // const codeList = [...DATA_HUGUES];
    const codeList = [...DATA_JOEY];

    return this.calculerResultat(codeList).toString();
  }

  private calculerResultat(codeList: number[]): number {
    const BLOC_LENGTH = 4;

    let i = 0;
    while (i < codeList.length) {
      const codeOperation = codeList[i];
      const param1 = codeList[i + 1];
      const param2 = codeList[i + 2];
      const indexToOverride = codeList[i + 3];

      if (codeOperation === OperationMathEnum.ADDITION) {
        codeList[indexToOverride] = codeList[param1] + codeList[param2];
      } else {
        if (codeOperation === OperationMathEnum.MULTIPLICATION) {
          codeList[indexToOverride] = codeList[param1] * codeList[param2];
        } else {
          i = codeList.length;
        }
      }

      i += BLOC_LENGTH;
    }

    return codeList[0];
  }
}
