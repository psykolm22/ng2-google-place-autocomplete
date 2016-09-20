import { Component} from '@angular/core';


@Component({
    selector : 'my-app',
    templateUrl: 'app/demo.html'
})
export class AppComponent {
getAddress(place:Object) {       
           console.log("Address", place);
       }

       
}



