# ng2-google-place-autocomplete
Google-Autocomplete-Angular2 Directive/Component <br/>
This is a Google-Autocomplete Directive/Component for Angular 2.

# Demo page
https://psykolm22.github.io/

# GitHub
Please fell free to declare issues or contribute  : https://github.com/psykolm22/ng2-google-place-autocomplete

# Installation
npm i --save ng2-google-place-autocomplete

# Usage
* Use it in your HTML elements, for example:
```html
<input type="text" [(ngModel)] = "address" 
 [options]='options' 
 (setAddress) = "getAddress($event)"
 (street_number) = 'street_number=$event'
 (street)= 'street=$event'
 (city)= 'city=$event'
 (state)='state=$event'
 (district)='district=$event'
 (country)='country=$event'
 (postal_code)='postal_code=$event'
 (lat)='lat=$event' 
 (lng)='lng=$event' 
 (adr_address)='adr_address=$event' 
 (name)='name=$event' 
 (place_id)='place_id=$event' 
 (types)='types=$event' 
 (url)='url=$event'  
 (utc_offset)='utc_offset=$event' 
 (vicinity)='vicinity=$event' 
 (photos)='photos=$event' 
 (airport)='airport=$event' 
 (CountryCodes)='CountryCodes=$event'
  id="autocomplete"
 ng2-google-place-autocomplete/> 
```


* Add GooglePlaceModule in your app.module.ts:
```javascript
import {GooglePlaceModule} from 'ng2-google-place-autocomplete';

@NgModule({
    ...
    import: [..., GooglePlaceModule]
})

```
* Include GooglePlaceDirective in your component:
```javascript
import {Component} from '@angular/core';
import {GooglePlaceDirective} from 'ng2-google-place-autocomplete';

@Component({
    selector: 'my-app',
    templateUrl: 'app/***.html'
})

export class AppComponent {
}
```
* Configure system.config.js
```javascript
var map = {
        ...    
        'ng2-google-place-autocomplete': 'node_modules/ng2-google-place-autocomplete'
    };
var packages = {
        ...
        'ng2-google-place-autocomplete': {main:'index.js', defaultExtension: 'js'}
    };
```

#Options
Options for Google Search
Choose one type from [ '(cities)', '(regions)',    'country', 'postal_code', 'sublocality', 'establishment', 'address', 'geocode']
country ( dynamic change allow) : CountryCode ISO 3166-1 Alpha-2 ( see demo )
```html
[options]="{
    types: [],
    componentRestrictions: { country: 'FR' }
    }"

#Tested in:
* Chrome
* Firefox
* Safari


#For previous version of Angular 1:
https://github.com/vskosp/vsGoogleAutocomplete