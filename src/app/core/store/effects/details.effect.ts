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
import { DetailsService } from '../../../services/details/details.service';
import { DataPoint } from '../../models/dataPoint';

@Injectable()
export class DetailsEffects {
    constructor(
        private actions$: Actions,
        private store: Store<fromRoot.State>,
        private router: Router,
        private detailsService: DetailsService
    ) {}

    @Effect() getDetails$: Observable<Action> = this.actions$
        .ofType(DetailsActions.GET_DETAILS)
        .concatMap((action) => {
            const id = action['id'];
            const start = action['start'];
            const end = action['end'];

            return this.detailsService.getDetails(id, start, end).mergeMap((response: DataPoint[]) => {
                return Array.from(new Set().add(new DetailsActions.GetDetailsSuccess(response)));
            });
        });
}
