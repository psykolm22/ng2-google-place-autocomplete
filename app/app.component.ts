import { Component} from '@angular/core';


@Component({
    selector : 'my-app',
    templateUrl: 'app/demo.html'
})
export class AppComponent {
    public options = {types: [],componentRestrictions: { country: 'FR' }}
    getAddress(place:Object) {       
           console.log("Address", place);
       }
}



