import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TimeseriesService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getTags() {
    return this.httpClient.get('/api/tag').map((response) => response);
  }

}
