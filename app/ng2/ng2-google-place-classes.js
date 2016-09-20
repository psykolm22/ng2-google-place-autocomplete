"use strict";
var Address = (function () {
    function Address(address_components, adr_address, formatted_address, geometry, html_attributions, icon, id, name, place_id, reference, scope, types, url, utc_offset, vicinity, photos) {
        this.address_components = address_components;
        this.adr_address = adr_address;
        this.formatted_address = formatted_address;
        this.geometry = geometry;
        this.html_attributions = html_attributions;
        this.icon = icon;
        this.id = id;
        this.name = name;
        this.place_id = place_id;
        this.reference = reference;
        this.scope = scope;
        this.types = types;
        this.url = url;
        this.utc_offset = utc_offset;
        this.vicinity = vicinity;
        this.photos = photos;
    }
    return Address;
}());
exports.Address = Address;
var Coordonate = (function () {
    function Coordonate(location, viewport) {
        this.location = location;
        this.viewport = viewport;
    }
    return Coordonate;
}());
exports.Coordonate = Coordonate;
var Location = (function () {
    function Location(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    return Location;
}());
exports.Location = Location;
var Photos = (function () {
    function Photos(height, width, html_attributions, getUrl) {
        this.height = height;
        this.width = width;
        this.html_attributions = html_attributions;
        this.getUrl = getUrl;
    }
    return Photos;
}());
exports.Photos = Photos;
var AutoCompleteOptionsClass = (function () {
    function AutoCompleteOptionsClass(
        //The area in which to search for places. Results are biased towards, but not restricted to, places contained within these bounds.
        bounds, 
        //The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.
        componentRestrictions, 
        //The types of predictions to be returned. For a list of supported types, see the developer's guide. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the 'geocode' and 'establishment' types, but note that this will have the same effect as specifying no types.
        types) {
        this.bounds = bounds;
        this.componentRestrictions = componentRestrictions;
        this.types = types;
    }
    return AutoCompleteOptionsClass;
}());
exports.AutoCompleteOptionsClass = AutoCompleteOptionsClass;
var componentRestrictions = (function () {
    function componentRestrictions(
        //Restricts predictions to the specified country (ISO 3166-1 Alpha-2 country code, case insensitive). E.g., us, br, au.
        country) {
        this.country = country;
    }
    return componentRestrictions;
}());
exports.componentRestrictions = componentRestrictions;
var AddressComponent = (function () {
    function AddressComponent(long_name, short_name, types) {
        this.long_name = long_name;
        this.short_name = short_name;
        this.types = types;
    }
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=ng2-google-place-classes.js.map