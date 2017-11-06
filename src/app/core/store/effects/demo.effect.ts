import { Action, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as fromRoot from '../application-state';
import * as DemoActions from '../actions/demo.actions';
import * as _ from 'lodash';

@Injectable()
export class DemoEffects {
    constructor(
        private actions$: Actions,
        private store: Store<fromRoot.State>,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    @Effect() demo$: Observable<Action> = this.actions$
        .ofType(DemoActions.DEMO_ACTION)
        .withLatestFrom(this.store)
        .concatMap(([action, state]) => {
            const actions = new Set();

            actions.add(new DemoActions.DemoAction());
            return Array.from(actions);
        });
}
