import { Action, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as fromRoot from '../application-state';
import * as TagActions from '../actions/tag.actions';
import * as _ from 'lodash';
import { TimeseriesService } from '../../../services/timeseries/timeseries.service';
import { Tag } from '../../models/tag';

@Injectable()
export class TagEffects {
    constructor(
        private actions$: Actions,
        private store: Store<fromRoot.State>,
        private timeseriesService: TimeseriesService,
        private router: Router
    ) {}

    @Effect() getTags$: Observable<Action> = this.actions$
        .ofType(TagActions.GET_TAGS)
        .concatMap((action) => {
            return this.timeseriesService.getTags().mergeMap((response: Tag[]) => {
                const actions = new Set();

                actions.add(new TagActions.GetTagsSuccess(response));
                actions.add(new TagActions.SelectTag(response[0]));
                return Array.from(actions);
            });
        });

    @Effect() selectTag$: Observable<Action> = this.actions$
        .ofType(TagActions.SELECT_TAG)
        .concatMap((action) => {
            const actions = new Set();
            // action.add(new DetailsActions.GetDetails(action.payload.tag));
            if (action['redirect']) {
                this.router.navigate(['details', action['payload'].tagId]);
            }

            return Array.from(actions);
        });
}
