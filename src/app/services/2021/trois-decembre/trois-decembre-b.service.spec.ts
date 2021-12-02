import { TestBed } from '@angular/core/testing';
import { TroisDecembreBService } from './trois-decembre-b.service';

describe('TroisDecembreBService', () => {
  let service: TroisDecembreBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TroisDecembreBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return '5941884'`, () => {
    expect(service.getResponse()).toEqual('5941884');
  });
});
