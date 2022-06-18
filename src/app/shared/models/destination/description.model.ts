import { ForReturn } from "../shared-models/for-return.model";

export interface Description extends ForReturn<number> {
    object_id: number;
    object_type: string;
    description_type: string;
    text: string;
    language_code: string;
    translated: number;
}