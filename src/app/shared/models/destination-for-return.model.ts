import { Destination } from './destination.model';

export interface DestinationForReturn {
    new_destinations: any[];
    updated_destinations: any[];
    destinations: Destination[];
}