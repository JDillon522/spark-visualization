import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromRoot from '../../core/store/application-state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Tag } from '../../core/models/tag';
import { DataPoint } from '../../core/models/dataPoint';
import { LineChart } from '../../core/models/chartTypes';
import * as moment from 'moment';
import * as DetailsActions from '../../core/store/actions/details.actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  private selectedTagSubscription: Subscription;
  private detailsSubscription: Subscription;

  public tagMeta: Tag;
  public details: LineChart;
  public start: string = '';
  public end: string = '';

  constructor(
    private store: Store<fromRoot.State>,

  ) { }

  ngOnInit() {
    this.selectedTagSubscription = this.store.select(fromRoot.getSelectedTag).subscribe(tag => {
      this.tagMeta = tag;
    });

    this.detailsSubscription = this.store.select(fromRoot.getDetails).subscribe(details => {
      this.details = details;
      if (details) {
        const dateRange = details.datasets[0].label.split(' ');
        this.start = dateRange[0];
        this.end = dateRange[2];
      }
    });
  }

  ngOnDestroy() {
    this.selectedTagSubscription.unsubscribe();
    this.detailsSubscription.unsubscribe();
  }

  onDateChange(event, date) {
    const formattedDate = moment(event.value, 'ddd MMM DD YYYY').format('YYYY-MM-DD');
    if (date === 'start') {
      this.start = formattedDate;
    } else {
      this.end = formattedDate;
    }

    this.store.dispatch(new DetailsActions.GetDetails(this.tagMeta.tagId, this.start, this.end));
  }
}
