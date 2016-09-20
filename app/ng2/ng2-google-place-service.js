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
    GooglePlaceService.prototype.find = function (address_components, query, val) {
        if (val === void 0) { val = null; }
        var res = null;
        for (var _i = 0, address_components_1 = address_components; _i < address_components_1.length; _i++) {
            var attr = address_components_1[_i];
            for (var _a = 0, _b = attr.types; _a < _b.length; _a++) {
                var type = _b[_a];
                if (type == query) {
                    return val ? attr[val] : attr;
                }
            }
        }
        return res;
    };
    GooglePlaceService.prototype.street_number = function (address_components) {
        return this.find(address_components, 'street_number', 'long_name');
    };
    GooglePlaceService.prototype.street = function (address_components) {
        return this.find(address_components, 'route', 'long_name');
    };
    GooglePlaceService.prototype.city = function (address_components) {
        return this.find(address_components, 'locality', 'long_name');
    };
    GooglePlaceService.prototype.state = function (address_components) {
        return this.find(address_components, 'administrative_area_level_1', 'long_name');
    };
    GooglePlaceService.prototype.postal_code = function (address_components) {
        return this.find(address_components, 'postal_code', 'long_name');
    };
    GooglePlaceService.prototype.country = function (address_components) {
        return this.find(address_components, 'country', 'long_name');
    };
    GooglePlaceService.prototype.administrative_area_level_2 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_2', "long_name");
    };
    // MORE NOT USED YET /////
    GooglePlaceService.prototype.intersection = function (address_components) {
        return this.find(address_components, 'intersection');
    };
    GooglePlaceService.prototype.political = function (address_components) {
        return this.find(address_components, 'political');
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
    /// return list ISO 3166-1 Alpha-2 country code
    GooglePlaceService.prototype.countryIsoCode = function () {
        return [
            {
                Name: "Afghanistan",
                Code: "AF"
            },
            {
                Name: "Åland Islands",
                Code: "AX"
            },
            {
                Name: "Albania",
                Code: "AL"
            },
            {
                Name: "Algeria",
                Code: "DZ"
            },
            {
                Name: "American Samoa",
                Code: "AS"
            },
            {
                Name: "Andorra",
                Code: "AD"
            },
            {
                Name: "Angola",
                Code: "AO"
            },
            {
                Name: "Anguilla",
                Code: "AI"
            },
            {
                Name: "Antarctica",
                Code: "AQ"
            },
            {
                Name: "Antigua and Barbuda",
                Code: "AG"
            },
            {
                Name: "Argentina",
                Code: "AR"
            },
            {
                Name: "Armenia",
                Code: "AM"
            },
            {
                Name: "Aruba",
                Code: "AW"
            },
            {
                Name: "Australia",
                Code: "AU"
            },
            {
                Name: "Austria",
                Code: "AT"
            },
            {
                Name: "Azerbaijan",
                Code: "AZ"
            },
            {
                Name: "Bahamas",
                Code: "BS"
            },
            {
                Name: "Bahrain",
                Code: "BH"
            },
            {
                Name: "Bangladesh",
                Code: "BD"
            },
            {
                Name: "Barbados",
                Code: "BB"
            },
            {
                Name: "Belarus",
                Code: "BY"
            },
            {
                Name: "Belgium",
                Code: "BE"
            },
            {
                Name: "Belize",
                Code: "BZ"
            },
            {
                Name: "Benin",
                Code: "BJ"
            },
            {
                Name: "Bermuda",
                Code: "BM"
            },
            {
                Name: "Bhutan",
                Code: "BT"
            },
            {
                Name: "Bolivia, Plurinational State of",
                Code: "BO"
            },
            {
                Name: "Bonaire, Sint Eustatius and Saba",
                Code: "BQ"
            },
            {
                Name: "Bosnia and Herzegovina",
                Code: "BA"
            },
            {
                Name: "Botswana",
                Code: "BW"
            },
            {
                Name: "Bouvet Island",
                Code: "BV"
            },
            {
                Name: "Brazil",
                Code: "BR"
            },
            {
                Name: "British Indian Ocean Territory",
                Code: "IO"
            },
            {
                Name: "Brunei Darussalam",
                Code: "BN"
            },
            {
                Name: "Bulgaria",
                Code: "BG"
            },
            {
                Name: "Burkina Faso",
                Code: "BF"
            },
            {
                Name: "Burundi",
                Code: "BI"
            },
            {
                Name: "Cambodia",
                Code: "KH"
            },
            {
                Name: "Cameroon",
                Code: "CM"
            },
            {
                Name: "Canada",
                Code: "CA"
            },
            {
                Name: "Cape Verde",
                Code: "CV"
            },
            {
                Name: "Cayman Islands",
                Code: "KY"
            },
            {
                Name: "Central African Republic",
                Code: "CF"
            },
            {
                Name: "Chad",
                Code: "TD"
            },
            {
                Name: "Chile",
                Code: "CL"
            },
            {
                Name: "China",
                Code: "CN"
            },
            {
                Name: "Christmas Island",
                Code: "CX"
            },
            {
                Name: "Cocos (Keeling) Islands",
                Code: "CC"
            },
            {
                Name: "Colombia",
                Code: "CO"
            },
            {
                Name: "Comoros",
                Code: "KM"
            },
            {
                Name: "Congo",
                Code: "CG"
            },
            {
                Name: "Congo, the Democratic Republic of the",
                Code: "CD"
            },
            {
                Name: "Cook Islands",
                Code: "CK"
            },
            {
                Name: "Costa Rica",
                Code: "CR"
            },
            {
                Name: "Côte d'Ivoire",
                Code: "CI"
            },
            {
                Name: "Croatia",
                Code: "HR"
            },
            {
                Name: "Cuba",
                Code: "CU"
            },
            {
                Name: "Curaçao",
                Code: "CW"
            },
            {
                Name: "Cyprus",
                Code: "CY"
            },
            {
                Name: "Czech Republic",
                Code: "CZ"
            },
            {
                Name: "Denmark",
                Code: "DK"
            },
            {
                Name: "Djibouti",
                Code: "DJ"
            },
            {
                Name: "Dominica",
                Code: "DM"
            },
            {
                Name: "Dominican Republic",
                Code: "DO"
            },
            {
                Name: "Ecuador",
                Code: "EC"
            },
            {
                Name: "Egypt",
                Code: "EG"
            },
            {
                Name: "El Salvador",
                Code: "SV"
            },
            {
                Name: "Equatorial Guinea",
                Code: "GQ"
            },
            {
                Name: "Eritrea",
                Code: "ER"
            },
            {
                Name: "Estonia",
                Code: "EE"
            },
            {
                Name: "Ethiopia",
                Code: "ET"
            },
            {
                Name: "Falkland Islands (Malvinas)",
                Code: "FK"
            },
            {
                Name: "Faroe Islands",
                Code: "FO"
            },
            {
                Name: "Fiji",
                Code: "FJ"
            },
            {
                Name: "Finland",
                Code: "FI"
            },
            {
                Name: "France",
                Code: "FR"
            },
            {
                Name: "French Guiana",
                Code: "GF"
            },
            {
                Name: "French Polynesia",
                Code: "PF"
            },
            {
                Name: "French Southern Territories",
                Code: "TF"
            },
            {
                Name: "Gabon",
                Code: "GA"
            },
            {
                Name: "Gambia",
                Code: "GM"
            },
            {
                Name: "Georgia",
                Code: "GE"
            },
            {
                Name: "Germany",
                Code: "DE"
            },
            {
                Name: "Ghana",
                Code: "GH"
            },
            {
                Name: "Gibraltar",
                Code: "GI"
            },
            {
                Name: "Greece",
                Code: "GR"
            },
            {
                Name: "Greenland",
                Code: "GL"
            },
            {
                Name: "Grenada",
                Code: "GD"
            },
            {
                Name: "Guadeloupe",
                Code: "GP"
            },
            {
                Name: "Guam",
                Code: "GU"
            },
            {
                Name: "Guatemala",
                Code: "GT"
            },
            {
                Name: "Guernsey",
                Code: "GG"
            },
            {
                Name: "Guinea",
                Code: "GN"
            },
            {
                Name: "Guinea-Bissau",
                Code: "GW"
            },
            {
                Name: "Guyana",
                Code: "GY"
            },
            {
                Name: "Haiti",
                Code: "HT"
            },
            {
                Name: "Heard Island and McDonald Islands",
                Code: "HM"
            },
            {
                Name: "Holy See (Vatican City State)",
                Code: "VA"
            },
            {
                Name: "Honduras",
                Code: "HN"
            },
            {
                Name: "Hong Kong",
                Code: "HK"
            },
            {
                Name: "Hungary",
                Code: "HU"
            },
            {
                Name: "Iceland",
                Code: "IS"
            },
            {
                Name: "India",
                Code: "IN"
            },
            {
                Name: "Indonesia",
                Code: "ID"
            },
            {
                Name: "Iran, Islamic Republic of",
                Code: "IR"
            },
            {
                Name: "Iraq",
                Code: "IQ"
            },
            {
                Name: "Ireland",
                Code: "IE"
            },
            {
                Name: "Isle of Man",
                Code: "IM"
            },
            {
                Name: "Israel",
                Code: "IL"
            },
            {
                Name: "Italy",
                Code: "IT"
            },
            {
                Name: "Jamaica",
                Code: "JM"
            },
            {
                Name: "Japan",
                Code: "JP"
            },
            {
                Name: "Jersey",
                Code: "JE"
            },
            {
                Name: "Jordan",
                Code: "JO"
            },
            {
                Name: "Kazakhstan",
                Code: "KZ"
            },
            {
                Name: "Kenya",
                Code: "KE"
            },
            {
                Name: "Kiribati",
                Code: "KI"
            },
            {
                Name: "Korea, Democratic People's Republic of",
                Code: "KP"
            },
            {
                Name: "Korea, Republic of",
                Code: "KR"
            },
            {
                Name: "Kuwait",
                Code: "KW"
            },
            {
                Name: "Kyrgyzstan",
                Code: "KG"
            },
            {
                Name: "Lao People's Democratic Republic",
                Code: "LA"
            },
            {
                Name: "Latvia",
                Code: "LV"
            },
            {
                Name: "Lebanon",
                Code: "LB"
            },
            {
                Name: "Lesotho",
                Code: "LS"
            },
            {
                Name: "Liberia",
                Code: "LR"
            },
            {
                Name: "Libya",
                Code: "LY"
            },
            {
                Name: "Liechtenstein",
                Code: "LI"
            },
            {
                Name: "Lithuania",
                Code: "LT"
            },
            {
                Name: "Luxembourg",
                Code: "LU"
            },
            {
                Name: "Macao",
                Code: "MO"
            },
            {
                Name: "Macedonia, the Former Yugoslav Republic of",
                Code: "MK"
            },
            {
                Name: "Madagascar",
                Code: "MG"
            },
            {
                Name: "Malawi",
                Code: "MW"
            },
            {
                Name: "Malaysia",
                Code: "MY"
            },
            {
                Name: "Maldives",
                Code: "MV"
            },
            {
                Name: "Mali",
                Code: "ML"
            },
            {
                Name: "Malta",
                Code: "MT"
            },
            {
                Name: "Marshall Islands",
                Code: "MH"
            },
            {
                Name: "Martinique",
                Code: "MQ"
            },
            {
                Name: "Mauritania",
                Code: "MR"
            },
            {
                Name: "Mauritius",
                Code: "MU"
            },
            {
                Name: "Mayotte",
                Code: "YT"
            },
            {
                Name: "Mexico",
                Code: "MX"
            },
            {
                Name: "Micronesia, Federated States of",
                Code: "FM"
            },
            {
                Name: "Moldova, Republic of",
                Code: "MD"
            },
            {
                Name: "Monaco",
                Code: "MC"
            },
            {
                Name: "Mongolia",
                Code: "MN"
            },
            {
                Name: "Montenegro",
                Code: "ME"
            },
            {
                Name: "Montserrat",
                Code: "MS"
            },
            {
                Name: "Morocco",
                Code: "MA"
            },
            {
                Name: "Mozambique",
                Code: "MZ"
            },
            {
                Name: "Myanmar",
                Code: "MM"
            },
            {
                Name: "Namibia",
                Code: "NA"
            },
            {
                Name: "Nauru",
                Code: "NR"
            },
            {
                Name: "Nepal",
                Code: "NP"
            },
            {
                Name: "Netherlands",
                Code: "NL"
            },
            {
                Name: "New Caledonia",
                Code: "NC"
            },
            {
                Name: "New Zealand",
                Code: "NZ"
            },
            {
                Name: "Nicaragua",
                Code: "NI"
            },
            {
                Name: "Niger",
                Code: "NE"
            },
            {
                Name: "Nigeria",
                Code: "NG"
            },
            {
                Name: "Niue",
                Code: "NU"
            },
            {
                Name: "Norfolk Island",
                Code: "NF"
            },
            {
                Name: "Northern Mariana Islands",
                Code: "MP"
            },
            {
                Name: "Norway",
                Code: "NO"
            },
            {
                Name: "Oman",
                Code: "OM"
            },
            {
                Name: "Pakistan",
                Code: "PK"
            },
            {
                Name: "Palau",
                Code: "PW"
            },
            {
                Name: "Palestine, State of",
                Code: "PS"
            },
            {
                Name: "Panama",
                Code: "PA"
            },
            {
                Name: "Papua New Guinea",
                Code: "PG"
            },
            {
                Name: "Paraguay",
                Code: "PY"
            },
            {
                Name: "Peru",
                Code: "PE"
            },
            {
                Name: "Philippines",
                Code: "PH"
            },
            {
                Name: "Pitcairn",
                Code: "PN"
            },
            {
                Name: "Poland",
                Code: "PL"
            },
            {
                Name: "Portugal",
                Code: "PT"
            },
            {
                Name: "Puerto Rico",
                Code: "PR"
            },
            {
                Name: "Qatar",
                Code: "QA"
            },
            {
                Name: "Réunion",
                Code: "RE"
            },
            {
                Name: "Romania",
                Code: "RO"
            },
            {
                Name: "Russian Federation",
                Code: "RU"
            },
            {
                Name: "Rwanda",
                Code: "RW"
            },
            {
                Name: "Saint Barthélemy",
                Code: "BL"
            },
            {
                Name: "Saint Helena, Ascension and Tristan da Cunha",
                Code: "SH"
            },
            {
                Name: "Saint Kitts and Nevis",
                Code: "KN"
            },
            {
                Name: "Saint Lucia",
                Code: "LC"
            },
            {
                Name: "Saint Martin (French part)",
                Code: "MF"
            },
            {
                Name: "Saint Pierre and Miquelon",
                Code: "PM"
            },
            {
                Name: "Saint Vincent and the Grenadines",
                Code: "VC"
            },
            {
                Name: "Samoa",
                Code: "WS"
            },
            {
                Name: "San Marino",
                Code: "SM"
            },
            {
                Name: "Sao Tome and Principe",
                Code: "ST"
            },
            {
                Name: "Saudi Arabia",
                Code: "SA"
            },
            {
                Name: "Senegal",
                Code: "SN"
            },
            {
                Name: "Serbia",
                Code: "RS"
            },
            {
                Name: "Seychelles",
                Code: "SC"
            },
            {
                Name: "Sierra Leone",
                Code: "SL"
            },
            {
                Name: "Singapore",
                Code: "SG"
            },
            {
                Name: "Sint Maarten (Dutch part)",
                Code: "SX"
            },
            {
                Name: "Slovakia",
                Code: "SK"
            },
            {
                Name: "Slovenia",
                Code: "SI"
            },
            {
                Name: "Solomon Islands",
                Code: "SB"
            },
            {
                Name: "Somalia",
                Code: "SO"
            },
            {
                Name: "South Africa",
                Code: "ZA"
            },
            {
                Name: "South Georgia and the South Sandwich Islands",
                Code: "GS"
            },
            {
                Name: "South Sudan",
                Code: "SS"
            },
            {
                Name: "Spain",
                Code: "ES"
            },
            {
                Name: "Sri Lanka",
                Code: "LK"
            },
            {
                Name: "Sudan",
                Code: "SD"
            },
            {
                Name: "Suriname",
                Code: "SR"
            },
            {
                Name: "Svalbard and Jan Mayen",
                Code: "SJ"
            },
            {
                Name: "Swaziland",
                Code: "SZ"
            },
            {
                Name: "Sweden",
                Code: "SE"
            },
            {
                Name: "Switzerland",
                Code: "CH"
            },
            {
                Name: "Syrian Arab Republic",
                Code: "SY"
            },
            {
                Name: "Taiwan, Province of China",
                Code: "TW"
            },
            {
                Name: "Tajikistan",
                Code: "TJ"
            },
            {
                Name: "Tanzania, United Republic of",
                Code: "TZ"
            },
            {
                Name: "Thailand",
                Code: "TH"
            },
            {
                Name: "Timor-Leste",
                Code: "TL"
            },
            {
                Name: "Togo",
                Code: "TG"
            },
            {
                Name: "Tokelau",
                Code: "TK"
            },
            {
                Name: "Tonga",
                Code: "TO"
            },
            {
                Name: "Trinidad and Tobago",
                Code: "TT"
            },
            {
                Name: "Tunisia",
                Code: "TN"
            },
            {
                Name: "Turkey",
                Code: "TR"
            },
            {
                Name: "Turkmenistan",
                Code: "TM"
            },
            {
                Name: "Turks and Caicos Islands",
                Code: "TC"
            },
            {
                Name: "Tuvalu",
                Code: "TV"
            },
            {
                Name: "Uganda",
                Code: "UG"
            },
            {
                Name: "Ukraine",
                Code: "UA"
            },
            {
                Name: "United Arab Emirates",
                Code: "AE"
            },
            {
                Name: "United Kingdom",
                Code: "GB"
            },
            {
                Name: "United States",
                Code: "US"
            },
            {
                Name: "United States Minor Outlying Islands",
                Code: "UM"
            },
            {
                Name: "Uruguay",
                Code: "UY"
            },
            {
                Name: "Uzbekistan",
                Code: "UZ"
            },
            {
                Name: "Vanuatu",
                Code: "VU"
            },
            {
                Name: "Venezuela, Bolivarian Republic of",
                Code: "VE"
            },
            {
                Name: "Viet Nam",
                Code: "VN"
            },
            {
                Name: "Virgin Islands, British",
                Code: "VG"
            },
            {
                Name: "Virgin Islands, U.S.",
                Code: "VI"
            },
            {
                Name: "Wallis and Futuna",
                Code: "WF"
            },
            {
                Name: "Western Sahara",
                Code: "EH"
            },
            {
                Name: "Yemen",
                Code: "YE"
            },
            {
                Name: "Zambia",
                Code: "ZM"
            },
            {
                Name: "Zimbabwe",
                Code: "ZW"
            }
        ];
    };
    // Types options 
    GooglePlaceService.prototype.TypesOptions = function () {
        return [
            '(cities)',
            '(regions)',
            'country',
            'postal_code',
            'sublocality',
            'establishment',
            'address',
            'geocode'
        ];
    };
    GooglePlaceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GooglePlaceService);
    return GooglePlaceService;
}());
exports.GooglePlaceService = GooglePlaceService;
//# sourceMappingURL=ng2-google-place-service.js.map