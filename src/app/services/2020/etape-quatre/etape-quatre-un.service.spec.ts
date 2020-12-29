import { TestBed, waitForAsync } from '@angular/core/testing';

import DATA_JOEY from './models/data-joey-quatre';
import DATA_TOM from './models/data-tom-quatre';
import { EtapeQuatreUnService } from 'src/app/services/2020/etape-quatre/etape-quatre-un.service';

describe('EtapeQuatreUn', () => {
  let service: EtapeQuatreUnService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(EtapeQuatreUnService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('lorsque DATA_TOM contient des passeports, devrait retourner 254', () => {
    service.DATA = DATA_TOM;

    expect(service.getReponse()).toEqual('254');
  });

  it('lorsque DATA_JOEY contient des passeports, devrait retourner 213', () => {
    service.DATA = DATA_JOEY;

    expect(service.getReponse()).toEqual('213');
  });
})
