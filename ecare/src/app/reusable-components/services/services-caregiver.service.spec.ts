import { TestBed } from '@angular/core/testing';

import { ServicesCaregiverService } from './services-caregiver.service';

describe('ServicesCaregiverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesCaregiverService = TestBed.get(ServicesCaregiverService);
    expect(service).toBeTruthy();
  });
});
