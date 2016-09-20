export declare class Address {
    address_components: Array<AddressComponent>;
    adr_address: string;
    formatted_address: string;
    geometry: Coordonate;
    html_attributions: Array<any>;
    icon: string;
    id: string;
    name: string;
    place_id: string;
    reference: string;
    scope: string;
    types: Array<any>;
    url: string;
    utc_offset: number;
    vicinity: string;
    photos: Array<Photos>;
    constructor(address_components: Array<AddressComponent>, adr_address: string, formatted_address: string, geometry: Coordonate, html_attributions: Array<any>, icon: string, id: string, name: string, place_id: string, reference: string, scope: string, types: Array<any>, url: string, utc_offset: number, vicinity: string, photos: Array<Photos>);
}
export declare class Coordonate {
    location: Location;
    viewport: any;
    constructor(location: Location, viewport: any);
}
export declare class Location {
    lat: any;
    lng: any;
    constructor(lat: any, lng: any);
}
export declare class Photos {
    height: string;
    width: string;
    html_attributions: Array<string>;
    getUrl: any;
    constructor(height: string, width: string, html_attributions: Array<string>, getUrl: any);
}
export declare class AutoCompleteOptionsClass {
    bounds: any;
    componentRestrictions: componentRestrictions;
    types: Array<string>;
    constructor(bounds: any, componentRestrictions: componentRestrictions, types: Array<string>);
}
export declare class componentRestrictions {
    country: string;
    constructor(country: string);
}
export declare class AddressComponent {
    long_name: string;
    short_name: string;
    types: Array<string>;
    constructor(long_name: string, short_name: string, types: Array<string>);
}
