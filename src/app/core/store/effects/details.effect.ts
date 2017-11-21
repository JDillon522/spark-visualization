import { Action, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as fromRoot from '../application-state';
import * as TagActions from '../actions/tag.actions';
import * as DetailsActions from '../actions/details.actions';
import * as _ from 'lodash';
import { Tag } from '../../models/tag';
import * as moment from 'moment';

@Injectable()
export class DetailsEffects {
    constructor(
        private actions$: Actions,
        private store: Store<fromRoot.State>,
        private router: Router
    ) {}

    @Effect() getDetails$: Observable<Action> = this.actions$
        .ofType(DetailsActions.GET_DETAILS)
        .concatMap((action) => {
            // return this.timeseriesService.getTags().mergeMap((response: Tag[]) => {
            //     const actions = new Set();

            //     actions.add(new TagActions.GetTagsSuccess(response));
            //     actions.add(new TagActions.SelectTag(response[0]));
            //     return Array.from(actions);
            // });
            console.log(action)
            return Observable.empty()
        });
}
