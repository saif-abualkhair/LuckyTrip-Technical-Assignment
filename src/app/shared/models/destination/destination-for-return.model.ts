import { Activity } from "./activity.model";
import { DestinationInfoForReturn } from "./destination-info-for-return.model";

export interface DestinationForReturn {
    destination: DestinationInfoForReturn;
    activities: Activity[];
}