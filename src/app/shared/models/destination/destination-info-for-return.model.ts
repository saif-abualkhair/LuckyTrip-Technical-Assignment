import { ForReturn } from "../shared-models/for-return.model";
import { Description } from "./description.model";
import { Destinationvideo } from "./destination-video.model";
import { Thumbnail } from "./Thumbnail.model";

export interface DestinationInfoForReturn extends ForReturn<number> {
    city: string;
    country_name: string;
    airport_name: string;
    country_code: string;
    latitude: number;
    longitude: number;
    iata_code: string;
    iata_parent_id: number;
    is_enabled: string;
    temperature: number;
    original_destination_id: number;
    destination_video: Destinationvideo;
    adventure_flag: number;
    nightlife_flag: number;
    culture_flag: number;
    romantic_flag: number;
    food_flag: number;
    hot_flag: number;
    beach_flag: number;
    sports_flag: number;
    winter_sports_flag: number;
    chill_flag: number;
    off_grid_flag: number;
    winter_flag: number;
    thumbnail: Thumbnail;
    description: Description;
    top_fives_new_flag: number;
    top_fives_updated_flag: number;
}