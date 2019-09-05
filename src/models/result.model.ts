import { Deserializable } from './deserializable';

export class ResultModel implements Deserializable {

    public totalHits: number;
    public hits: any[];
    public total: number;

    constructor() {}

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}