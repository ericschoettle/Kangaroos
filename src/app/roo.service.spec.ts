import { TestBed, inject } from '@angular/core/testing';

import { RooService } from './roo.service';

describe('RooService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RooService]
    });
  });

  it('should be created', inject([RooService], (service: RooService) => {
    expect(service).toBeTruthy();
  }));
});
