import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromRoot from '../../core/store/application-state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Tag } from '../../core/models/tag';
import { DataPoint } from '../../core/models/dataPoint';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  private selectedTagSubscription: Subscription;
  private detailsSubscription: Subscription;

  public tagMeta: Tag;
  public details: DataPoint[];

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.selectedTagSubscription = this.store.select(fromRoot.getSelectedTag).subscribe(tag => {
      this.tagMeta = tag;
    });

    this.detailsSubscription = this.store.select(fromRoot.getDetails).subscribe(details => {
      this.details = details;
    });
  }

  ngOnDestroy() {
    this.selectedTagSubscription.unsubscribe();
    this.detailsSubscription.unsubscribe();
  }
}
