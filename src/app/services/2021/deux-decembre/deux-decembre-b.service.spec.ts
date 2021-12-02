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

  it(`should return ''`, () => {
    expect(service.getResponse()).toEqual('');
  });
});
