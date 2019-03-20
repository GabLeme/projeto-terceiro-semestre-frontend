import { TestBed } from '@angular/core/testing';

import { AuthConsumerService } from './auth-consumer.service';

describe('AuthConsumerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthConsumerService = TestBed.get(AuthConsumerService);
    expect(service).toBeTruthy();
  });
});
