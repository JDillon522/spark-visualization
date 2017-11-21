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

export const SELECT_TAG = '[Tag] Set the selected tag';

export class SelectTag implements Action {
    readonly type = SELECT_TAG;
    constructor(private payload: Tag, private redirect?: boolean) {}
}

export type Actions
    = GetTags
    | GetTagsSuccess
    | GetTagsError
    | SelectTag;
