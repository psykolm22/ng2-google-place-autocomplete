

export class Address {
    constructor(
        public address_components: Array<AddressComponent>,
         public adr_address: string, 
         public formatted_address: string, 
         public geometry: Coordonate,
         public html_attributions: Array<any>,
         public icon: string,
         public id: string, 
         public name: string,
         public place_id: string,
         public reference: string,
         public scope: string, 
         public types: Array<any>,
         public url: string,
         public utc_offset: number,
         public vicinity: string,
         public photos: Array<Photos>
         ) { }

        
}

export class Coordonate{
     constructor(
        public location: Location,
        public viewport: any
         ) { }
}

export class Location{
    constructor(
        public lat:any,
        public lng:any 
    ){}
}
export class Photos{
     constructor(
        public height: string,
        public width: string,
        public html_attributions: Array<string>,
        public getUrl:any
    ){}
}
export class AutoCompleteOptionsClass{
     constructor(
         //The area in which to search for places. Results are biased towards, but not restricted to, places contained within these bounds.
        public bounds: any,
        //The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.
        public componentRestrictions: componentRestrictions,
        //The types of predictions to be returned. For a list of supported types, see the developer's guide. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the 'geocode' and 'establishment' types, but note that this will have the same effect as specifying no types.
        public types: Array<string>
    ){}
}

export class componentRestrictions{
     constructor(
         //Restricts predictions to the specified country (ISO 3166-1 Alpha-2 country code, case insensitive). E.g., us, br, au.
         public country: string
    ){}
}

export class AddressComponent{
    constructor(
        public long_name: string,
        public short_name: string,
        public types: Array<string>
    ){}
}

