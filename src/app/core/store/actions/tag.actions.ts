import { Action } from '@ngrx/store';
import { Tag } from '../../models/tag';

export const GET_TAGS = '[Tag] Get list of tags';
export const GET_TAGS_SUCCESS = '[Tag] Get tag success';
export const GET_TAGS_ERROR = '[Tag] Get tag error';

export class GetTags implements Action {
    readonly type = GET_TAGS;
}

export class GetTagsSuccess implements Action {
    readonly type = GET_TAGS_SUCCESS;
    constructor(private payload: Tag[]) {}
}

export class GetTagsError implements Action {
    readonly type = GET_TAGS_ERROR;
    constructor(private payload: string) {}
}

export type Actions
    = GetTags
    | GetTagsSuccess
    | GetTagsError;
