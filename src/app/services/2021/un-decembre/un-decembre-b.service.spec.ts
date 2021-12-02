import { TestBed } from '@angular/core/testing';
import { UnDecembreBService } from 'src/app/services/2021/un-decembre/un-decembre-b.service';

describe('DeuxDecembreAService', () => {
  let service: UnDecembreBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnDecembreBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return 1486`, () => {
    expect(service.getResponse()).toEqual('1486');
  });
});
