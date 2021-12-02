import { DeuxDecembreBService } from './deux-decembre-b.service';
import { TestBed } from '@angular/core/testing';

describe('DeuxDecembreBService', () => {
  let service: DeuxDecembreBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeuxDecembreBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return '1997106066'`, () => {
    expect(service.getResponse()).toEqual('1997106066');
  });
});
