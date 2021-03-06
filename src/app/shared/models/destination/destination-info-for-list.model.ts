import { ForList } from "../shared-models/for-list.model";

export interface DestinationInfoForList extends ForList<number> {
    city: string;
    airport_name: string;
    country_name: string;
    country_code: string;
    top_fives_new_flag: number;
    top_fives_updated_flag: number;
    image_url: string;
}