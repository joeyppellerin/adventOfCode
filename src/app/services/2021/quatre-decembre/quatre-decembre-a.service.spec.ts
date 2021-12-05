import { QuatreDecembreAService } from './quatre-decembre-a.service';
import { TestBed } from '@angular/core/testing';

describe('QuatreDecembreAService', () => {
  let service: QuatreDecembreAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuatreDecembreAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return ''`, () => {
    expect(service.getResponse()).toEqual('');
  });
});
