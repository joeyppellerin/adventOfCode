import { QuatreDecembreBService } from './quatre-decembre-b.service';
import { TestBed } from '@angular/core/testing';

describe('QuatreDecembreBService', () => {
  let service: QuatreDecembreBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuatreDecembreBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return ''`, () => {
    expect(service.getResponse()).toEqual('');
  });
});
