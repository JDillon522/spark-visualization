import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromRoot from '../../core/store/application-state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Tag } from '../../core/models/tag';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  private selectedTagSubscription: Subscription;
  public tagMeta: Tag;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.selectedTagSubscription = this.store.select(fromRoot.getSelectedTag).subscribe(tag => {
      this.tagMeta = tag;
    });
  }

  ngOnDestroy() {
    this.selectedTagSubscription.unsubscribe();
  }
}
