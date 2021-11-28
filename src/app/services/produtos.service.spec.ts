import { TestBed } from '@angular/core/testing';

import { MultiCoisasService } from './produtos.service';

describe('MultiCoisasService', () => {
  let service: MultiCoisasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiCoisasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
