export interface DataPoint {
    observationTS: string;
    tagId: string;
    value: boolean | string | number | null;
    quality: any;
}
