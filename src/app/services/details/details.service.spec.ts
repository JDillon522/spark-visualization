import { TestBed, inject } from '@angular/core/testing';
import { DetailsService } from './details.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('DetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DetailsService
      ]
    });
  });

  it('should be created', inject([DetailsService], (service: DetailsService) => {
    expect(service).toBeTruthy();
  }));

  it('should call /api/tag', inject(
    [HttpClient, HttpTestingController, DetailsService],
    (http: HttpClient, httpMock: HttpTestingController, service: DetailsService) => {
      // TODO figure out how to test a call
      expect(service).toBeTruthy();
    })
  );
});
