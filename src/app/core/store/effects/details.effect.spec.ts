import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import * as fromRoot from '../application-state';
import * as fromDetails from '../reducers/details.reducer';
import * as DetailsActions from '../actions/details.actions';
import { DetailsComponent } from '../../../pages/details/details.component';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { DetailsEffects } from './details.effect';
import { Observable } from 'rxjs/Observable';
import { TagMock } from '../../../testingHelpers/tag.mock';
import { FormattedDatePickerDate, FormattedDate2 } from '../../../testingHelpers/datepicker.mock';
import { DataPointMock } from '../../../testingHelpers/dataPoint.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsService } from '../../../services/details/details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Details Effects', () => {
    let store: Store<fromRoot.State>;
    let effects: DetailsEffects;
    let actions: Observable<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                StoreModule.forRoot({
                    ...fromRoot.reducers,
                    'details': combineReducers(fromDetails.reducer)
                })
            ],
            providers: [
                DetailsEffects,
                DetailsService,
                provideMockActions(() => actions),
                // other providers
            ]
        });
        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();
        effects = TestBed.get(DetailsEffects);
    });

    // it('should work', () => {
    //   const action = new DetailsActions.GetDetails(TagMock[0].tagId, FormattedDatePickerDate, FormattedDate2);
    //   const completion = new DetailsActions.GetDetailsSuccess(DataPointMock, FormattedDatePickerDate, FormattedDate2, TagMock[0]);

    //   // Refer to 'Writing Marble Tests' for details on '--a-' syntax
    //   actions = hot('--a-', { a: action });
    //   const expected = cold('--b', { b: completion });

    //   expect(effects.getDetails$).toBeObservable(expected);
    // });

    // it('should work also', () => {
    //   actions = new ReplaySubject(1);

    //   actions.next(SomeAction);

    //   effects.someSource$.subscribe(result => {
    //     expect(result).toEqual(AnotherAction);
    //   });
    // });
  });
