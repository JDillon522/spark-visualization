import { Action } from '@ngrx/store';
import { DataPoint } from '../../models/dataPoint';

export const GET_DETAILS = '[Details] Get details about tag';
export const GET_DETAILS_SUCCESS = '[Details] Get details successfully';
export const GET_DETAILS_ERROR = '[Details] Get details error';

export class GetDetails implements Action {
    readonly type = GET_DETAILS;
    constructor(
        private id: string,
        private start: string,
        private end?: string
    ) {}
}

export class GetDetailsSuccess implements Action {
    readonly type = GET_DETAILS_SUCCESS;
    constructor(private details: DataPoint[], private start: string, private end: string) {}
}

export class GetDetailsError implements Action {
    readonly type = GET_DETAILS_ERROR;
    constructor(private error: string) {}
}

export type Actions
    = GetDetails
    | GetDetailsSuccess
    | GetDetailsError;
