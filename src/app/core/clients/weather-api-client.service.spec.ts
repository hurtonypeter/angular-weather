import { TestBed } from '@angular/core/testing';

import { WeatherApiClientService } from './weather-api-client.service';

describe('WeatherApiClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherApiClientService = TestBed.get(WeatherApiClientService);
    expect(service).toBeTruthy();
  });
});
