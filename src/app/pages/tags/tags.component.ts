import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import * as fromRoot from '../../core/store/application-state';
import * as TagActions from '../../core/store/actions/tag.actions';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Tag } from '../../core/models/tag';
import { DataSource } from '@angular/cdk/table';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;
  public tags: Tag[];
  public displayedColumns = ['name', 'unit', 'features'];

  private tagSubscription: Subscription;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.tagSubscription = this.store.select(fromRoot.getTagData).subscribe(tags => {
      this.tags = tags;
    });
  }

  ngOnDestroy() {
    this.tagSubscription.unsubscribe();
  }
}
