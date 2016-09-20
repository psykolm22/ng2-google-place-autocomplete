"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_google_place_service_1 = require('./ng2-google-place-service');
var GooglePlaceDirective = (function () {
    function GooglePlaceDirective(service, resolver, viewContainerRef) {
        this.service = service;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.ngModelChange = new core_1.EventEmitter(false);
        this.setAddress = new core_1.EventEmitter();
        this.street_number = new core_1.EventEmitter();
        this.postal_code = new core_1.EventEmitter();
        this.country = new core_1.EventEmitter();
        this.lat = new core_1.EventEmitter();
        this.lng = new core_1.EventEmitter();
        this.adr_address = new core_1.EventEmitter();
        this.formatted_address = new core_1.EventEmitter();
        this.icon = new core_1.EventEmitter();
        //@Output() id: EventEmitter<any>  = new EventEmitter();
        this.name = new core_1.EventEmitter();
        this.place_id = new core_1.EventEmitter();
        //@Output() reference: EventEmitter<any>  = new EventEmitter();
        this.scope = new core_1.EventEmitter();
        this.types = new core_1.EventEmitter();
        this.url = new core_1.EventEmitter();
        this.utc_offset = new core_1.EventEmitter();
        this.vicinity = new core_1.EventEmitter();
        this.photos = new core_1.EventEmitter();
        this.street = new core_1.EventEmitter();
        this.intersection = new core_1.EventEmitter();
        this.political = new core_1.EventEmitter();
        this.colloquial_area = new core_1.EventEmitter();
        this.city = new core_1.EventEmitter();
        this.ward = new core_1.EventEmitter();
        this.state = new core_1.EventEmitter();
        this.district = new core_1.EventEmitter();
        this.administrative_area_level_3 = new core_1.EventEmitter();
        this.administrative_area_level_4 = new core_1.EventEmitter();
        this.administrative_area_level_5 = new core_1.EventEmitter();
        this.sublocality = new core_1.EventEmitter();
        this.sublocality_level_1 = new core_1.EventEmitter();
        this.sublocality_level_2 = new core_1.EventEmitter();
        this.sublocality_level_3 = new core_1.EventEmitter();
        this.sublocality_level_4 = new core_1.EventEmitter();
        this.sublocality_level_5 = new core_1.EventEmitter();
        this.neighborhood = new core_1.EventEmitter();
        this.premise = new core_1.EventEmitter();
        this.subpremise = new core_1.EventEmitter();
        this.natural_feature = new core_1.EventEmitter();
        this.airport = new core_1.EventEmitter();
        this.park = new core_1.EventEmitter();
        this.point_of_interest = new core_1.EventEmitter();
        this.floor = new core_1.EventEmitter();
        this.establishment = new core_1.EventEmitter();
        this.parking = new core_1.EventEmitter();
        this.post_box = new core_1.EventEmitter();
        this.room = new core_1.EventEmitter();
        this.postal_town = new core_1.EventEmitter();
        this.bus_station = new core_1.EventEmitter();
        this.train_station = new core_1.EventEmitter();
        this.transit_station = new core_1.EventEmitter();
        this.el = this.viewContainerRef.element.nativeElement;
    }
    GooglePlaceDirective.prototype.ngOnInit = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.el, this.options);
        autocomplete.addListener('place_changed', function () {
            _this.place = autocomplete.getPlace();
            console.log(_this.place);
            if (_this.place && _this.place.place_id) {
                console.log('place_changed');
                _this.invokeEvent(_this.place);
            }
        });
    };
    GooglePlaceDirective.prototype.invokeEvent = function (place) {
        //this.ngModelChange.emit(this.el.value);
        this.setAddress.emit(place);
        this.street_number.emit(this.service.street_number(place.address_components) ? this.service.street_number(place.address_components) : null);
        this.street.emit(this.service.route(place.address_components) ? this.service.route(place.address_components) : null);
        this.state.emit(this.service.administrative_area_level_1(place.address_components) ? this.service.administrative_area_level_1(place.address_components) : null);
        this.district.emit(this.service.administrative_area_level_2(place.address_components) ? this.service.administrative_area_level_2(place.address_components) : null);
        this.country.emit(this.service.country(place.address_components) ? this.service.country(place.address_components) : null);
        this.postal_code.emit(this.service.postal_code(place.address_components) ? this.service.postal_code(place.address_components) : null);
        this.lat.emit(this.place.geometry.location.lat() ? this.place.geometry.location.lat() : null);
        this.lng.emit(this.place.geometry.location.lng() ? this.place.geometry.location.lng() : null);
        this.adr_address.emit(this.place.adr_address ? this.place.adr_address : null);
        this.formatted_address.emit(this.place.formatted_address ? this.place.formatted_address : null);
        // DEPRECATED SINCE 2014  this.id.emit(this.place.id ? this.place.id : null)
        this.name.emit(this.place.name ? this.place.name : null);
        this.place_id.emit(this.place.place_id ? this.place.place_id : null);
        //this.reference.emit(this.place.reference ? this.place.reference : null)
        this.scope.emit(this.place.scope ? this.place.scope : null);
        this.types.emit(this.place.types ? this.place.types : null);
        this.url.emit(this.place.url ? this.place.url : null);
        this.utc_offset.emit(this.place.utc_offset ? this.place.utc_offset : null);
        this.vicinity.emit(this.place.vicinity ? this.place.vicinity : null);
        this.photos.emit(this.place.photos ? this.place.photos : null);
        //////////////// MORE  /////////////
        this.intersection.emit(this.service.intersection(place.address_components) ? this.service.intersection(place.address_components) : null);
        this.political.emit(this.service.political(place.address_components) ? this.service.political(place.address_components) : null);
        this.colloquial_area.emit(this.service.colloquial_area(place.address_components) ? this.service.colloquial_area(place.address_components) : null);
        this.city.emit(this.service.locality(place.address_components) ? this.service.locality(place.address_components) : null);
        this.ward.emit(this.service.ward(place.address_components) ? this.service.ward(place.address_components) : null);
        this.administrative_area_level_3.emit(this.service.administrative_area_level_3(place.address_components) ? this.service.administrative_area_level_3(place.address_components) : null);
        this.administrative_area_level_4.emit(this.service.administrative_area_level_4(place.address_components) ? this.service.administrative_area_level_4(place.address_components) : null);
        this.administrative_area_level_5.emit(this.service.administrative_area_level_5(place.address_components) ? this.service.administrative_area_level_5(place.address_components) : null);
        this.sublocality.emit(this.service.route(place.address_components) ? this.service.route(place.address_components) : null);
        this.sublocality_level_1.emit(this.service.sublocality_level_1(place.address_components) ? this.service.sublocality_level_1(place.address_components) : null);
        this.sublocality_level_2.emit(this.service.sublocality_level_2(place.address_components) ? this.service.sublocality_level_2(place.address_components) : null);
        this.sublocality_level_3.emit(this.service.sublocality_level_3(place.address_components) ? this.service.sublocality_level_3(place.address_components) : null);
        this.sublocality_level_4.emit(this.service.sublocality_level_4(place.address_components) ? this.service.sublocality_level_4(place.address_components) : null);
        this.sublocality_level_5.emit(this.service.sublocality_level_5(place.address_components) ? this.service.sublocality_level_5(place.address_components) : null);
        this.neighborhood.emit(this.service.neighborhood(place.address_components) ? this.service.neighborhood(place.address_components) : null);
        this.premise.emit(this.service.premise(place.address_components) ? this.service.premise(place.address_components) : null);
        this.subpremise.emit(this.service.subpremise(place.address_components) ? this.service.subpremise(place.address_components) : null);
        this.natural_feature.emit(this.service.natural_feature(place.address_components) ? this.service.natural_feature(place.address_components) : null);
        this.airport.emit(this.service.airport(place.address_components) ? this.service.airport(place.address_components) : null);
        this.park.emit(this.service.park(place.address_components) ? this.service.park(place.address_components) : null);
        this.point_of_interest.emit(this.service.point_of_interest(place.address_components) ? this.service.point_of_interest(place.address_components) : null);
        this.floor.emit(this.service.floor(place.address_components) ? this.service.floor(place.address_components) : null);
        this.establishment.emit(this.service.establishment(place.address_components) ? this.service.establishment(place.address_components) : null);
        this.parking.emit(this.service.parking(place.address_components) ? this.service.parking(place.address_components) : null);
        this.post_box.emit(this.service.post_box(place.address_components) ? this.service.post_box(place.address_components) : null);
        this.postal_town.emit(this.service.postal_town(place.address_components) ? this.service.postal_town(place.address_components) : null);
        this.room.emit(this.service.room(place.address_components) ? this.service.room(place.address_components) : null);
        this.bus_station.emit(this.service.bus_station(place.address_components) ? this.service.bus_station(place.address_components) : null);
        this.train_station.emit(this.service.train_station(place.address_components) ? this.service.train_station(place.address_components) : null);
        this.transit_station.emit(this.service.transit_station(place.address_components) ? this.service.transit_station(place.address_components) : null);
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], GooglePlaceDirective.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "ngModelChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "setAddress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "street_number", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "postal_code", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "country", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "lat", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "lng", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "adr_address", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "formatted_address", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "icon", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "place_id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "scope", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "types", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "url", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "utc_offset", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "vicinity", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "photos", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "street", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "intersection", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "political", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "colloquial_area", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "city", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "ward", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "state", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "district", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "administrative_area_level_3", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "administrative_area_level_4", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "administrative_area_level_5", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "sublocality", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "sublocality_level_1", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "sublocality_level_2", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "sublocality_level_3", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "sublocality_level_4", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "sublocality_level_5", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "neighborhood", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "premise", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "subpremise", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "natural_feature", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "airport", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "park", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "point_of_interest", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "floor", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "establishment", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "parking", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "post_box", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "room", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "postal_town", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "bus_station", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "train_station", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GooglePlaceDirective.prototype, "transit_station", void 0);
    GooglePlaceDirective = __decorate([
        core_1.Directive({
            selector: '[googleplace]',
            host: {}
        }), 
        __metadata('design:paramtypes', [ng2_google_place_service_1.GooglePlaceService, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], GooglePlaceDirective);
    return GooglePlaceDirective;
}());
exports.GooglePlaceDirective = GooglePlaceDirective;
//# sourceMappingURL=ng2-google-place-directive.js.map