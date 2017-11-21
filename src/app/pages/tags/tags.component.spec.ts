import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import * as fromRoot from '../../core/store/application-state';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromTag from '../../core/store/reducers/tag.reducer';
import { MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TimeseriesService } from '../../services/timeseries/timeseries.service';
import { HttpClientModule } from '@angular/common/http';
import * as TagActions from '../../core/store/actions/tag.actions';
import { By } from '@angular/platform-browser';
import { TagsComponent } from './tags.component';
import { DataTableModule } from 'primeng/primeng';
import { SelectTag } from '../../core/store/actions/tag.actions';
import { TagMock } from '../../testingHelpers/tag.mock';

describe('TagsComponent', () => {
  let store: Store<fromRoot.State>;
  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TagsComponent
      ],
      imports: [
        DataTableModule,
        HttpClientModule,
        RouterModule,
        MatMenuModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'tag': combineReducers(fromTag.reducer)
        })

      ],
      providers: [
      ]
    }).compileComponents();

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load data when tag row is selected', () => {
    const action = new TagActions.SelectTag(TagMock[0], true);
    component.selected = TagMock[0];
    component.onRowSelect();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
