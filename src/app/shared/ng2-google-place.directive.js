"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GooglePlaceDirective = (function () {
    function GooglePlaceDirective(el, service) {
        this.el = el;
        this.service = service;
        this.CountryCodes = new core_1.EventEmitter();
        this.setAddress = new core_1.EventEmitter();
        this.street_number = new core_1.EventEmitter();
        this.postal_code = new core_1.EventEmitter();
        this.country = new core_1.EventEmitter();
        this.lat = new core_1.EventEmitter();
        this.lng = new core_1.EventEmitter();
        this.adr_address = new core_1.EventEmitter();
        this.formatted_address = new core_1.EventEmitter();
        this.name = new core_1.EventEmitter();
        this.place_id = new core_1.EventEmitter();
        this.types = new core_1.EventEmitter();
        this.url = new core_1.EventEmitter();
        this.utc_offset = new core_1.EventEmitter();
        this.vicinity = new core_1.EventEmitter();
        this.photos = new core_1.EventEmitter();
        this.street = new core_1.EventEmitter();
        this.city = new core_1.EventEmitter();
        this.state = new core_1.EventEmitter();
        this.district = new core_1.EventEmitter();
    }
    GooglePlaceDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.CountryCodes.emit(this.service.countryIsoCode());
        this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
        this.trigger = this.autocomplete.addListener('place_changed', function () {
            var place = _this.autocomplete.getPlace();
            if (place && place.place_id) {
                _this.invokeEvent(place);
            }
        });
    };
    GooglePlaceDirective.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
        this.street_number.emit(this.service.street_number(place.address_components) ? this.service.street_number(place.address_components) : null);
        this.street.emit(this.service.street(place.address_components) ? this.service.street(place.address_components) : null);
        this.city.emit(this.service.city(place.address_components) ? this.service.city(place.address_components) : null);
        this.state.emit(this.service.state(place.address_components) ? this.service.state(place.address_components) : null);
        this.country.emit(this.service.country(place.address_components) ? this.service.country(place.address_components) : null);
        this.postal_code.emit(this.service.postal_code(place.address_components) ? this.service.postal_code(place.address_components) : null);
        this.district.emit(this.service.administrative_area_level_2(place.address_components) ? this.service.administrative_area_level_2(place.address_components) : null);
        this.lat.emit(place.geometry.location.lat() ? place.geometry.location.lat() : null);
        this.lng.emit(place.geometry.location.lng() ? place.geometry.location.lng() : null);
        this.adr_address.emit(place.adr_address ? place.adr_address : null);
        this.formatted_address.emit(place.formatted_address ? place.formatted_address : null);
        this.name.emit(place.name ? place.name : null);
        this.place_id.emit(place.place_id ? place.place_id : null);
        this.types.emit(place.types ? place.types : null);
        this.url.emit(place.url ? place.url : null);
        this.utc_offset.emit(place.utc_offset ? place.utc_offset : null);
        this.vicinity.emit(place.vicinity ? place.vicinity : null);
        this.photos.emit(place.photos ? place.photos : null);
        /*
       DEPRECATED SINCE 2014
       place.id
       reference
       */
        /*
        NOT USED YET
    
        this.intersection.emit(this.service.intersection(place.address_components) ? this.service.intersection(place.address_components) : null)
        this.political.emit(this.service.political(place.address_components) ? this.service.political(place.address_components) : null)
        this.colloquial_area.emit(this.service.colloquial_area(place.address_components) ? this.service.colloquial_area(place.address_components) : null)
        
        this.ward.emit(this.service.ward(place.address_components) ? this.service.ward(place.address_components) : null)
        
        this.administrative_area_level_3.emit(this.service.administrative_area_level_3(place.address_components) ? this.service.administrative_area_level_3(place.address_components) : null)
        this.administrative_area_level_4.emit(this.service.administrative_area_level_4(place.address_components) ? this.service.administrative_area_level_4(place.address_components) : null)
        this.administrative_area_level_5.emit(this.service.administrative_area_level_5(place.address_components) ? this.service.administrative_area_level_5(place.address_components) : null)
        
        this.sublocality.emit(this.service.sublocality(place.address_components) ? this.service.sublocality(place.address_components) : null)
        this.sublocality_level_1.emit(this.service.sublocality_level_1(place.address_components) ? this.service.sublocality_level_1(place.address_components) : null)
        this.sublocality_level_2.emit(this.service.sublocality_level_2(place.address_components) ? this.service.sublocality_level_2(place.address_components) : null)
        this.sublocality_level_3.emit(this.service.sublocality_level_3(place.address_components) ? this.service.sublocality_level_3(place.address_components) : null)
        this.sublocality_level_4.emit(this.service.sublocality_level_4(place.address_components) ? this.service.sublocality_level_4(place.address_components) : null)
        this.sublocality_level_5.emit(this.service.sublocality_level_5(place.address_components) ? this.service.sublocality_level_5(place.address_components) : null)
        
        this.neighborhood.emit(this.service.neighborhood(place.address_components) ? this.service.neighborhood(place.address_components) : null)
        this.premise.emit(this.service.premise(place.address_components) ? this.service.premise(place.address_components) : null)
        this.subpremise.emit(this.service.subpremise(place.address_components) ? this.service.subpremise(place.address_components) : null)
        this.natural_feature.emit(this.service.natural_feature(place.address_components) ? this.service.natural_feature(place.address_components) : null)
        this.airport.emit(this.service.airport(place.address_components) ? this.service.airport(place.address_components) : null)
        this.park.emit(this.service.park(place.address_components) ? this.service.park(place.address_components) : null)
        this.point_of_interest.emit(this.service.point_of_interest(place.address_components) ? this.service.point_of_interest(place.address_components) : null)
        this.floor.emit(this.service.floor(place.address_components) ? this.service.floor(place.address_components) : null)
        this.establishment.emit(this.service.establishment(place.address_components) ? this.service.establishment(place.address_components) : null)
        this.parking.emit(this.service.parking(place.address_components) ? this.service.parking(place.address_components) : null)
        this.post_box.emit(this.service.post_box(place.address_components) ? this.service.post_box(place.address_components) : null)
        this.postal_town.emit(this.service.postal_town(place.address_components) ? this.service.postal_town(place.address_components) : null)
        this.room.emit(this.service.room(place.address_components) ? this.service.room(place.address_components) : null)
        this.bus_station.emit(this.service.bus_station(place.address_components) ? this.service.bus_station(place.address_components) : null)
        this.train_station.emit(this.service.train_station(place.address_components) ? this.service.train_station(place.address_components) : null)
        this.transit_station.emit(this.service.transit_station(place.address_components) ? this.service.transit_station(place.address_components) : null)
        */
    };
    __decorate([
        core_1.Input('options')
    ], GooglePlaceDirective.prototype, "options");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "CountryCodes");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "setAddress");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "street_number");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "postal_code");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "country");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "lat");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "lng");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "adr_address");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "formatted_address");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "name");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "place_id");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "types");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "url");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "utc_offset");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "vicinity");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "photos");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "street");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "city");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "state");
    __decorate([
        core_1.Output()
    ], GooglePlaceDirective.prototype, "district");
    GooglePlaceDirective = __decorate([
        core_1.Directive({
            selector: '[ng2-google-place-autocomplete]'
        })
    ], GooglePlaceDirective);
    return GooglePlaceDirective;
}());
exports.GooglePlaceDirective = GooglePlaceDirective;
