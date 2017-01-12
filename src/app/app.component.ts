import { Component} from '@angular/core';


@Component({
    selector : 'app-root',
    templateUrl: './demo.html' 
})
export class AppComponent {
    public options = {types: [],componentRestrictions: { country: 'FR' }}
    getAddress(place:Object) {       
           console.log("Address", place);
       }
}



