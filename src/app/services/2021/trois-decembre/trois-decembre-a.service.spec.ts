import { TestBed } from '@angular/core/testing';
import { TroisDecembreAService } from './trois-decembre-a.service';

describe('TroisDecembreAService', () => {
  let service: TroisDecembreAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TroisDecembreAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return '4006064'`, () => {
    expect(service.getResponse()).toEqual('4006064');
  });
});
