import { DeuxDecembreAService } from './deux-decembre-a.service';
import { TestBed } from '@angular/core/testing';

describe('DeuxDecembreAService', () => {
  let service: DeuxDecembreAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeuxDecembreAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return ''`, () => {
    expect(service.getResponse()).toEqual('');
  });
});
