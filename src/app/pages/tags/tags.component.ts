import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromRoot from '../../core/store/application-state';
import * as TagActions from '../../core/store/actions/tag.actions';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Tag } from '../../core/models/tag';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnDestroy {
  public tags: MyDataSource = new MyDataSource([
    {
        "tagId": "Tag1",
        "label": "Power at Meter 1",
        "dataType": "double",
        "unit": "kW",
        "isTransient": false,
        "features": [
            "power",
            "meter",
            "load",
            "consumption"
        ]
    },
    {
        "tagId": "Tag2",
        "label": "Unit 1 Online Status",
        "dataType": "boolean",
        "unit": "Status",
        "isTransient": true,
        "features": [
            "status",
            "unit"
        ]
    },
    {
        "tagId": "Tag3",
        "label": "Pump 1 Running",
        "dataType": "string",
        "unit": "Status",
        "isTransient": false,
        "features": [
            "status",
            "pump",
            "consumption"
        ]
    },
    {
        "tagId": "Tag4",
        "label": "Meter 1 Voltage",
        "dataType": "integer",
        "unit": "V",
        "isTransient": false,
        "features": [
            "meter"
        ]
    }
]);
  public displayedColumns = ['position', 'name', 'unit', 'features'];

  private tagSubscription: Subscription;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    // this.tagSubscription = this.store.select(fromRoot.getTagData).subscribe(tags => {
    //   this.tags = tags;
    // });
  }

  ngOnDestroy() {
    this.tagSubscription.unsubscribe();
  }
}

export class MyDataSource extends DataSource<Tag> {
  constructor(private data: Tag[]) {
    super();
  }
   /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Tag[]> {
    return Observable.of(this.data);
  }

  disconnect() {}

  }
