import { TestBed, inject } from '@angular/core/testing';

import { TimeseriesService } from './timeseries.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { DetailsService } from '../details/details.service';

describe('TimeseriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [TimeseriesService]
    });
  });

  it('should be created', inject([TimeseriesService], (service: TimeseriesService) => {
    expect(service).toBeTruthy();
  }));

  it('should call /api/details', inject(
    [HttpClient, HttpTestingController, TimeseriesService],
    (http: HttpClient, httpMock: HttpTestingController, service: TimeseriesService) => {
      // TODO figure out how to test a call
      expect(service).toBeTruthy();
    })
  );
});
