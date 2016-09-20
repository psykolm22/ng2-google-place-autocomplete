import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {GooglePlaceModule} from './ng2/ng2-google-place-module'
import {FormsModule} from '@angular/forms'

@NgModule({
  imports:      [ BrowserModule, FormsModule,GooglePlaceModule ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
