import { DestinationInfoForList } from "./destination-info-for-list.model";

export interface DestinationForList {
    new_destinations: any[];
    updated_destinations: any[];
    destinations: DestinationInfoForList[];
}