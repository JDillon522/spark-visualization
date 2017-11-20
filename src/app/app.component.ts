import { Component, OnInit } from '@angular/core';
import { TimeseriesService } from './services/timeseries/timeseries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tag;

  constructor(
    private timeSeriesService: TimeseriesService
  ) {}

  ngOnInit( ) {
    this.timeSeriesService.getTags().subscribe(res => this.tag = res);

  }
}
