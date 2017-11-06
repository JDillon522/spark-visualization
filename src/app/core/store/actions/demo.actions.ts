import { Action } from '@ngrx/store';
export const DEMO_ACTION = '[Demo] Delete this';

export class DemoAction implements Action {
    readonly type = DEMO_ACTION;
    constructor(private payload?) { }
}

export type Actions = DemoAction;
