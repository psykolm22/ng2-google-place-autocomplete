import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GooglePlaceDirective} from './ng2-google-place.directive'
import {GooglePlaceService} from './ng2-google-place.service'

@NgModule({
    imports: [CommonModule],
    providers: [GooglePlaceService],
    declarations: [GooglePlaceDirective],
    exports: [CommonModule, GooglePlaceDirective]
})
export class GooglePlaceModule {}