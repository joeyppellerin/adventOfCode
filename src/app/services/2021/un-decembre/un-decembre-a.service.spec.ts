import { TestBed } from '@angular/core/testing';
import { UnDecembreAService } from 'src/app/services/2021/un-decembre/un-decembre-a.service';

describe('DeuxDecembreAService', () => {
  let service: UnDecembreAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnDecembreAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return 1446`, () => {
    expect(service.getResponse()).toEqual('1446');
  });
});
