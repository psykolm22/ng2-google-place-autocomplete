import { Component} from '@angular/core';


@Component({
    selector : 'app-root',
    templateUrl: './demo.html' 
})
export class AppComponent {
    public options = {types: ['address'],componentRestrictions: { country: 'FR' }}
    getAddress(place:Object) {       
           console.log("Address", place);
       }
}



