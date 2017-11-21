import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import * as fromRoot from './core/store/application-state';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromTag from './core/store/reducers/tag.reducer';
import { MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TimeseriesService } from './services/timeseries/timeseries.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { PagesModule } from './pages/pages.module';
import * as TagActions from './core/store/actions/tag.actions';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let store: Store<fromRoot.State>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientModule,
        AppRoutingModule,
        PagesModule,
        RouterModule,
        MatMenuModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'tag': combineReducers(fromTag.reducer)
        })

      ],
      providers: [
        TimeseriesService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load data when created', () => {
    const action = new TagActions.GetTags();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should go to details', async(() => {
    const action = new TagActions.SelectTag(null, true);
    component.goToDetails();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  }));

});
