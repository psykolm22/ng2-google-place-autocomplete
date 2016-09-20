import {Injectable} from '@angular/core';
import {Address, AddressComponent} from './ng2-google-place-classes'

@Injectable()
export class GooglePlaceService {
    constructor() { }

  
    private find(address_components:Array<AddressComponent>, query:string){
        var res = null; 
            for(var attr of address_components) {
                    for(var type of attr.types){
                            if (type == query){
                                return attr
                            }
                    }
            }
            return res
    }

    street_number(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'street_number')
    }

    route(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'route')
    }

    intersection(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'intersection')
    }

    political(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'political')
    }

    country(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'country')
    }

    administrative_area_level_1(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'administrative_area_level_1')
    }
    administrative_area_level_2(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'administrative_area_level_2')
    }
    administrative_area_level_3(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'administrative_area_level_3')
    }
    administrative_area_level_4(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'administrative_area_level_4')
    }
    administrative_area_level_5(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'administrative_area_level_5')
    }
    colloquial_area(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'colloquial_area')
    }
    locality(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'locality')
    }
    ward(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'ward')
    }
    sublocality(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'sublocality')
    }
    sublocality_level_1(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'sublocality_level_1')
    }
    sublocality_level_2(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'sublocality_level_2')
    }
    sublocality_level_3(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'sublocality_level_3')
    }
    sublocality_level_4(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'sublocality_level_4')
    }
    sublocality_level_5(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'sublocality_level_5')
    }
    neighborhood(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'neighborhood')
    }
    premise(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'premise')
    }
    subpremise(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'subpremise')
    }
    postal_code(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'postal_code')
    }
    natural_feature(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'natural_feature')
    }
    airport(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'airport')
    }

   park(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'park')
    }
    
    point_of_interest(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'point_of_interest')
    }
      floor(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'floor')
    }
    
    establishment(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'establishment')
    }
      parking(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'parking')
    }
    
    post_box(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'post_box')
    }
      postal_town(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'postal_town')
    }
    
    room(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'room')
    }

        bus_station(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'bus_station')
    }
    
    train_station(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'train_station')
    }
     transit_station(address_components:Array<AddressComponent>) {
        return this.find(address_components, 'transit_station')
    }

}