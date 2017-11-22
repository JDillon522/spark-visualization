import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromRoot from '../../core/store/application-state';
import * as fromDetails from '../../core/store/reducers/details.reducer';
import * as DetailsActions from '../../core/store/actions/details.actions';
import { DetailsComponent } from './details.component';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { DataTableModule, ChartModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { DatePickerDate, FormattedDatePickerDate, FormattedDate2 } from '../../testingHelpers/datepicker.mock';
import { TagMock } from '../../testingHelpers/tag.mock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DetailsComponent', () => {
  let store: Store<fromRoot.State>;
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailsComponent
      ],
      imports: [
        DataTableModule,
        HttpClientModule,
        RouterModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        BrowserAnimationsModule,
        ChartModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'tag': combineReducers(fromDetails.reducer)
        })

      ],
      providers: [
      ]
    }).compileComponents();

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Datepicker changes', () => {
    it('should format the start date correctly', () => {
      component.tagMeta = TagMock[0];
      component.end = FormattedDate2;
      component.onDateChange(DatePickerDate, 'start');
      expect(component.start).toBe(FormattedDatePickerDate);
    });

    it('should format the end date correctly', () => {
      component.tagMeta = TagMock[0];
      component.start = FormattedDate2;
      component.onDateChange(DatePickerDate, 'end');
      expect(component.end).toBe(FormattedDatePickerDate);
    });

    it('should dispatch an action to get tag data when the date changes', () => {
      component.tagMeta = TagMock[0];
      component.end = FormattedDate2;
      const action = new DetailsActions.GetDetails(TagMock[0].tagId, FormattedDatePickerDate, FormattedDate2);
      component.onDateChange(DatePickerDate, 'start');
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });

});
