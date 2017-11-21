import { Component, OnInit } from '@angular/core';
import { TimeseriesService } from './services/timeseries/timeseries.service';
import * as fromRoot from './core/store/application-state';
import * as TagActions from './core/store/actions/tag.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private timeSeriesService: TimeseriesService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit( ) {
    this.store.dispatch(new TagActions.GetTags());
  }

  goToDetails() {
    this.store.dispatch(new TagActions.SelectTag(null, true));
  }
}
