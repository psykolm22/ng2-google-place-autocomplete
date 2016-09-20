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
var GooglePlaceService = (function () {
    function GooglePlaceService() {
    }
    GooglePlaceService.prototype.find = function (address_components, query) {
        var res = null;
        for (var _i = 0, address_components_1 = address_components; _i < address_components_1.length; _i++) {
            var attr = address_components_1[_i];
            for (var _a = 0, _b = attr.types; _a < _b.length; _a++) {
                var type = _b[_a];
                if (type == query) {
                    return attr;
                }
            }
        }
        return res;
    };
    GooglePlaceService.prototype.street_number = function (address_components) {
        return this.find(address_components, 'street_number');
    };
    GooglePlaceService.prototype.route = function (address_components) {
        return this.find(address_components, 'route');
    };
    GooglePlaceService.prototype.intersection = function (address_components) {
        return this.find(address_components, 'intersection');
    };
    GooglePlaceService.prototype.political = function (address_components) {
        return this.find(address_components, 'political');
    };
    GooglePlaceService.prototype.country = function (address_components) {
        return this.find(address_components, 'country');
    };
    GooglePlaceService.prototype.administrative_area_level_1 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_1');
    };
    GooglePlaceService.prototype.administrative_area_level_2 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_2');
    };
    GooglePlaceService.prototype.administrative_area_level_3 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_3');
    };
    GooglePlaceService.prototype.administrative_area_level_4 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_4');
    };
    GooglePlaceService.prototype.administrative_area_level_5 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_5');
    };
    GooglePlaceService.prototype.colloquial_area = function (address_components) {
        return this.find(address_components, 'colloquial_area');
    };
    GooglePlaceService.prototype.locality = function (address_components) {
        return this.find(address_components, 'locality');
    };
    GooglePlaceService.prototype.ward = function (address_components) {
        return this.find(address_components, 'ward');
    };
    GooglePlaceService.prototype.sublocality = function (address_components) {
        return this.find(address_components, 'sublocality');
    };
    GooglePlaceService.prototype.sublocality_level_1 = function (address_components) {
        return this.find(address_components, 'sublocality_level_1');
    };
    GooglePlaceService.prototype.sublocality_level_2 = function (address_components) {
        return this.find(address_components, 'sublocality_level_2');
    };
    GooglePlaceService.prototype.sublocality_level_3 = function (address_components) {
        return this.find(address_components, 'sublocality_level_3');
    };
    GooglePlaceService.prototype.sublocality_level_4 = function (address_components) {
        return this.find(address_components, 'sublocality_level_4');
    };
    GooglePlaceService.prototype.sublocality_level_5 = function (address_components) {
        return this.find(address_components, 'sublocality_level_5');
    };
    GooglePlaceService.prototype.neighborhood = function (address_components) {
        return this.find(address_components, 'neighborhood');
    };
    GooglePlaceService.prototype.premise = function (address_components) {
        return this.find(address_components, 'premise');
    };
    GooglePlaceService.prototype.subpremise = function (address_components) {
        return this.find(address_components, 'subpremise');
    };
    GooglePlaceService.prototype.postal_code = function (address_components) {
        return this.find(address_components, 'postal_code');
    };
    GooglePlaceService.prototype.natural_feature = function (address_components) {
        return this.find(address_components, 'natural_feature');
    };
    GooglePlaceService.prototype.airport = function (address_components) {
        return this.find(address_components, 'airport');
    };
    GooglePlaceService.prototype.park = function (address_components) {
        return this.find(address_components, 'park');
    };
    GooglePlaceService.prototype.point_of_interest = function (address_components) {
        return this.find(address_components, 'point_of_interest');
    };
    GooglePlaceService.prototype.floor = function (address_components) {
        return this.find(address_components, 'floor');
    };
    GooglePlaceService.prototype.establishment = function (address_components) {
        return this.find(address_components, 'establishment');
    };
    GooglePlaceService.prototype.parking = function (address_components) {
        return this.find(address_components, 'parking');
    };
    GooglePlaceService.prototype.post_box = function (address_components) {
        return this.find(address_components, 'post_box');
    };
    GooglePlaceService.prototype.postal_town = function (address_components) {
        return this.find(address_components, 'postal_town');
    };
    GooglePlaceService.prototype.room = function (address_components) {
        return this.find(address_components, 'room');
    };
    GooglePlaceService.prototype.bus_station = function (address_components) {
        return this.find(address_components, 'bus_station');
    };
    GooglePlaceService.prototype.train_station = function (address_components) {
        return this.find(address_components, 'train_station');
    };
    GooglePlaceService.prototype.transit_station = function (address_components) {
        return this.find(address_components, 'transit_station');
    };
    GooglePlaceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GooglePlaceService);
    return GooglePlaceService;
}());
exports.GooglePlaceService = GooglePlaceService;
//# sourceMappingURL=ng2-google-place-service.js.map