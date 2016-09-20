import {Component, Directive, Input, Output, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {GooglePlaceService} from './ng2-google-place-service';
import {Address} from './ng2-google-place-classes'
declare var google:any;

@Directive({
  selector: '[ng2-google-place-autocomplete]', 

})
export class GooglePlaceDirective implements OnInit {
  @Input('options') options;

  @Output() CountryCodes : EventEmitter<any>  = new EventEmitter();
  
  @Output() setAddress : EventEmitter<any>  = new EventEmitter();
 
  @Output() street_number: EventEmitter<any>  = new EventEmitter();
  @Output()  postal_code: EventEmitter<any>  = new EventEmitter();
  @Output() country : EventEmitter<any>  = new EventEmitter();
  @Output() lat : EventEmitter<any>  = new EventEmitter();
  @Output() lng: EventEmitter<any>  = new EventEmitter();
  @Output() adr_address: EventEmitter<any>  = new EventEmitter();
  @Output() formatted_address: EventEmitter<any>  = new EventEmitter();
  @Output() name: EventEmitter<any>  = new EventEmitter();
  @Output() place_id: EventEmitter<any>  = new EventEmitter();
  @Output() types: EventEmitter<any>  = new EventEmitter();
  @Output() url: EventEmitter<any>  = new EventEmitter();
  @Output() utc_offset: EventEmitter<any>  = new EventEmitter();
  @Output() vicinity: EventEmitter<any>  = new EventEmitter();
  @Output() photos: EventEmitter<any>  = new EventEmitter();
  @Output() street: EventEmitter<any>  = new EventEmitter();
  @Output() city: EventEmitter<any>  = new EventEmitter();
  @Output() state: EventEmitter<any>  = new EventEmitter();
  @Output() district: EventEmitter<any>  = new EventEmitter();
  
  
  
  /* 
  NOT USED YET 
  @Output() intersection: EventEmitter<any>  = new EventEmitter();
  @Output() political: EventEmitter<any>  = new EventEmitter();
  @Output() colloquial_area: EventEmitter<any>  = new EventEmitter();
  @Output() ward: EventEmitter<any>  = new EventEmitter();
  @Output() administrative_area_level_3: EventEmitter<any>  = new EventEmitter();
  @Output() administrative_area_level_4: EventEmitter<any>  = new EventEmitter();
  @Output() administrative_area_level_5: EventEmitter<any>  = new EventEmitter();
  @Output() sublocality: EventEmitter<any>  = new EventEmitter();
  @Output() sublocality_level_1: EventEmitter<any>  = new EventEmitter();
  @Output() sublocality_level_2: EventEmitter<any>  = new EventEmitter();
  @Output() sublocality_level_3: EventEmitter<any>  = new EventEmitter();
  @Output() sublocality_level_4: EventEmitter<any>  = new EventEmitter();
  @Output() sublocality_level_5: EventEmitter<any>  = new EventEmitter();
  @Output() neighborhood: EventEmitter<any>  = new EventEmitter();
  @Output() premise: EventEmitter<any>  = new EventEmitter();
  @Output() subpremise: EventEmitter<any>  = new EventEmitter();
  @Output() natural_feature: EventEmitter<any>  = new EventEmitter();
  @Output() airport: EventEmitter<any>  = new EventEmitter();
  @Output() park: EventEmitter<any>  = new EventEmitter();
  @Output() point_of_interest: EventEmitter<any>  = new EventEmitter();
  @Output() floor: EventEmitter<any>  = new EventEmitter();
  @Output() establishment: EventEmitter<any>  = new EventEmitter();
  @Output() parking: EventEmitter<any>  = new EventEmitter();
  @Output() post_box: EventEmitter<any>  = new EventEmitter();
  @Output() room: EventEmitter<any>  = new EventEmitter();
  @Output() postal_town: EventEmitter<any>  = new EventEmitter();
  @Output() bus_station: EventEmitter<any>  = new EventEmitter();
  @Output() train_station: EventEmitter<any>  = new EventEmitter();
  @Output() transit_station: EventEmitter<any>  = new EventEmitter();
 */
  
  autocomplete:any;
  
  trigger:any;


  constructor(private el: ElementRef, private service: GooglePlaceService) {}

  ngOnInit(){
   
   this.CountryCodes.emit(this.service.countryIsoCode())
  

   this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
   this.trigger = this.autocomplete.addListener('place_changed', () => {
   var place = this.autocomplete.getPlace();
   if (place && place.place_id){
   this.invokeEvent(place)
  }
});
  }

   invokeEvent(place: Address) {
    this.setAddress.emit(place); 
    
    this.street_number.emit(this.service.street_number(place.address_components) ?this.service.street_number(place.address_components) : null)
    this.street.emit(this.service.street(place.address_components) ? this.service.street(place.address_components) : null) 
    this.city.emit(this.service.city(place.address_components) ? this.service.city(place.address_components) : null) 
    this.state.emit(this.service.state(place.address_components) ? this.service.state(place.address_components) : null) 
    this.country.emit(this.service.country(place.address_components) ? this.service.country(place.address_components) : null) 
    this.postal_code.emit(this.service.postal_code(place.address_components) ? this.service.postal_code(place.address_components) : null) 
    this.district.emit(this.service.administrative_area_level_2(place.address_components) ? this.service.administrative_area_level_2(place.address_components) : null)
    this.lat.emit(place.geometry.location.lat() ? place.geometry.location.lat() : null)
    this.lng.emit(place.geometry.location.lng() ? place.geometry.location.lng() : null)
    this.adr_address.emit(place.adr_address ? place.adr_address : null)
    this.formatted_address.emit(place.formatted_address ? place.formatted_address : null)
    this.name.emit(place.name ? place.name : null)
    this.place_id.emit(place.place_id ? place.place_id : null)
    this.types.emit(place.types ? place.types : null)
    this.url.emit(place.url ? place.url : null)
    this.utc_offset.emit(place.utc_offset ? place.utc_offset : null)
    this.vicinity.emit(place.vicinity ? place.vicinity : null)
    this.photos.emit(place.photos ? place.photos : null)

     /*
    DEPRECATED SINCE 2014  
    place.id
    reference 
    */

   
    /*
    NOT USED YET 

    this.intersection.emit(this.service.intersection(place.address_components) ? this.service.intersection(place.address_components) : null) 
    this.political.emit(this.service.political(place.address_components) ? this.service.political(place.address_components) : null) 
    this.colloquial_area.emit(this.service.colloquial_area(place.address_components) ? this.service.colloquial_area(place.address_components) : null) 
    
    this.ward.emit(this.service.ward(place.address_components) ? this.service.ward(place.address_components) : null) 
    
    this.administrative_area_level_3.emit(this.service.administrative_area_level_3(place.address_components) ? this.service.administrative_area_level_3(place.address_components) : null) 
    this.administrative_area_level_4.emit(this.service.administrative_area_level_4(place.address_components) ? this.service.administrative_area_level_4(place.address_components) : null) 
    this.administrative_area_level_5.emit(this.service.administrative_area_level_5(place.address_components) ? this.service.administrative_area_level_5(place.address_components) : null) 
    
    this.sublocality.emit(this.service.sublocality(place.address_components) ? this.service.sublocality(place.address_components) : null) 
    this.sublocality_level_1.emit(this.service.sublocality_level_1(place.address_components) ? this.service.sublocality_level_1(place.address_components) : null) 
    this.sublocality_level_2.emit(this.service.sublocality_level_2(place.address_components) ? this.service.sublocality_level_2(place.address_components) : null) 
    this.sublocality_level_3.emit(this.service.sublocality_level_3(place.address_components) ? this.service.sublocality_level_3(place.address_components) : null) 
    this.sublocality_level_4.emit(this.service.sublocality_level_4(place.address_components) ? this.service.sublocality_level_4(place.address_components) : null) 
    this.sublocality_level_5.emit(this.service.sublocality_level_5(place.address_components) ? this.service.sublocality_level_5(place.address_components) : null) 
    
    this.neighborhood.emit(this.service.neighborhood(place.address_components) ? this.service.neighborhood(place.address_components) : null) 
    this.premise.emit(this.service.premise(place.address_components) ? this.service.premise(place.address_components) : null) 
    this.subpremise.emit(this.service.subpremise(place.address_components) ? this.service.subpremise(place.address_components) : null) 
    this.natural_feature.emit(this.service.natural_feature(place.address_components) ? this.service.natural_feature(place.address_components) : null) 
    this.airport.emit(this.service.airport(place.address_components) ? this.service.airport(place.address_components) : null) 
    this.park.emit(this.service.park(place.address_components) ? this.service.park(place.address_components) : null) 
    this.point_of_interest.emit(this.service.point_of_interest(place.address_components) ? this.service.point_of_interest(place.address_components) : null) 
    this.floor.emit(this.service.floor(place.address_components) ? this.service.floor(place.address_components) : null) 
    this.establishment.emit(this.service.establishment(place.address_components) ? this.service.establishment(place.address_components) : null) 
    this.parking.emit(this.service.parking(place.address_components) ? this.service.parking(place.address_components) : null) 
    this.post_box.emit(this.service.post_box(place.address_components) ? this.service.post_box(place.address_components) : null) 
    this.postal_town.emit(this.service.postal_town(place.address_components) ? this.service.postal_town(place.address_components) : null) 
    this.room.emit(this.service.room(place.address_components) ? this.service.room(place.address_components) : null) 
    this.bus_station.emit(this.service.bus_station(place.address_components) ? this.service.bus_station(place.address_components) : null) 
    this.train_station.emit(this.service.train_station(place.address_components) ? this.service.train_station(place.address_components) : null) 
    this.transit_station.emit(this.service.transit_station(place.address_components) ? this.service.transit_station(place.address_components) : null) 
    */
  
}


}