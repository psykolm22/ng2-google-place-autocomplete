import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {GooglePlaceModule} from 'ng2-google-place-autocomplete'


import {FormsModule} from '@angular/forms'

@NgModule({
  imports:      [ BrowserModule, FormsModule,GooglePlaceModule ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
