import { TestBed } from '@angular/core/testing';

import { ExchangeGiftService } from './exchange-gift.service';

describe('ExchangeGiftService', () => {
  let service: ExchangeGiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeGiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
