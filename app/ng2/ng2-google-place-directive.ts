import {Directive, ElementRef, EventEmitter, Output,Input,  ComponentFactoryResolver , ViewContainerRef ,NgModule, OnInit} from '@angular/core';
import {GooglePlaceService} from './ng2-google-place-service';
import {Address} from './ng2-google-place-classes'

declare var google:any;

@Directive({
  selector: '[googleplace]',
  host: {
    //'(input)' : 'changeInput($event.target.value)',
     //'(keyup.enter)': 'KeyEnter($event)',
  }
})
export class GooglePlaceDirective implements OnInit {
  @Input('options') options;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);
  @Output() setAddress : EventEmitter<any>  = new EventEmitter();

  @Output() street_number : EventEmitter<any>  = new EventEmitter();
  @Output() postal_code : EventEmitter<any>  = new EventEmitter();
  @Output() country : EventEmitter<any>  = new EventEmitter();
  @Output() lat : EventEmitter<any>  = new EventEmitter();
  @Output() lng: EventEmitter<any>  = new EventEmitter();
  @Output() adr_address: EventEmitter<any>  = new EventEmitter();
  @Output() formatted_address: EventEmitter<any>  = new EventEmitter();
  @Output() icon: EventEmitter<any>  = new EventEmitter();
  //@Output() id: EventEmitter<any>  = new EventEmitter();
  @Output() name: EventEmitter<any>  = new EventEmitter();
  @Output() place_id: EventEmitter<any>  = new EventEmitter();
  //@Output() reference: EventEmitter<any>  = new EventEmitter();
  @Output() scope: EventEmitter<any>  = new EventEmitter();
  @Output() types: EventEmitter<any>  = new EventEmitter();
  @Output() url: EventEmitter<any>  = new EventEmitter();
  @Output() utc_offset: EventEmitter<any>  = new EventEmitter();
  @Output() vicinity: EventEmitter<any>  = new EventEmitter();
  @Output() photos: EventEmitter<any>  = new EventEmitter();
  @Output() street: EventEmitter<any>  = new EventEmitter();
  @Output() intersection: EventEmitter<any>  = new EventEmitter();
  @Output() political: EventEmitter<any>  = new EventEmitter();
  @Output() colloquial_area: EventEmitter<any>  = new EventEmitter();
  @Output() city: EventEmitter<any>  = new EventEmitter();
  @Output() ward: EventEmitter<any>  = new EventEmitter();
  @Output() state: EventEmitter<any>  = new EventEmitter();
  @Output() district: EventEmitter<any>  = new EventEmitter();
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
 
  
  autocomplete:any;
  
  private el:ElementRef;
  
  private place : Address


  constructor(private service: GooglePlaceService,  private resolver: ComponentFactoryResolver, public  viewContainerRef: ViewContainerRef) {
    this.el = this.viewContainerRef.element.nativeElement
    
  }

  ngOnInit(){
  
   var autocomplete = new google.maps.places.Autocomplete(this.el, this.options);
   
   autocomplete.addListener('place_changed', () => {
   this.place = autocomplete.getPlace();
      console.log(this.place)
      if( this.place && this.place.place_id){
        console.log('place_changed')
      this.invokeEvent(this.place)
      }
  
});
  }

 

  
   invokeEvent(place: Address) {

    //this.ngModelChange.emit(this.el.value);
    this.setAddress.emit(place); 
     
    this.street_number.emit(this.service.street_number(place.address_components) ? this.service.street_number(place.address_components) : null)  
    this.street.emit(this.service.route(place.address_components) ? this.service.route(place.address_components) : null) 
    this.state.emit(this.service.administrative_area_level_1(place.address_components) ? this.service.administrative_area_level_1(place.address_components) : null) 
    this.district.emit(this.service.administrative_area_level_2(place.address_components) ? this.service.administrative_area_level_2(place.address_components) : null) 
    this.country.emit(this.service.country(place.address_components) ? this.service.country(place.address_components) : null) 
    this.postal_code.emit(this.service.postal_code(place.address_components) ? this.service.postal_code(place.address_components) : null) 
    
    
    this.lat.emit(this.place.geometry.location.lat() ? this.place.geometry.location.lat() : null)
    this.lng.emit(this.place.geometry.location.lng() ? this.place.geometry.location.lng() : null)
    this.adr_address.emit(this.place.adr_address ? this.place.adr_address : null)
    this.formatted_address.emit(this.place.formatted_address ? this.place.formatted_address : null)
    // DEPRECATED SINCE 2014  this.id.emit(this.place.id ? this.place.id : null)
    this.name.emit(this.place.name ? this.place.name : null)
    this.place_id.emit(this.place.place_id ? this.place.place_id : null)
    //this.reference.emit(this.place.reference ? this.place.reference : null)
    this.scope.emit(this.place.scope ? this.place.scope : null)
    this.types.emit(this.place.types ? this.place.types : null)
    this.url.emit(this.place.url ? this.place.url : null)
    this.utc_offset.emit(this.place.utc_offset ? this.place.utc_offset : null)
    this.vicinity.emit(this.place.vicinity ? this.place.vicinity : null)
    this.photos.emit(this.place.photos ? this.place.photos : null)


    //////////////// MORE  /////////////
    this.intersection.emit(this.service.intersection(place.address_components) ? this.service.intersection(place.address_components) : null) 
    this.political.emit(this.service.political(place.address_components) ? this.service.political(place.address_components) : null) 
    this.colloquial_area.emit(this.service.colloquial_area(place.address_components) ? this.service.colloquial_area(place.address_components) : null) 
    this.city.emit(this.service.locality(place.address_components) ? this.service.locality(place.address_components) : null) 
    this.ward.emit(this.service.ward(place.address_components) ? this.service.ward(place.address_components) : null) 
    
    this.administrative_area_level_3.emit(this.service.administrative_area_level_3(place.address_components) ? this.service.administrative_area_level_3(place.address_components) : null) 
    this.administrative_area_level_4.emit(this.service.administrative_area_level_4(place.address_components) ? this.service.administrative_area_level_4(place.address_components) : null) 
    this.administrative_area_level_5.emit(this.service.administrative_area_level_5(place.address_components) ? this.service.administrative_area_level_5(place.address_components) : null) 
    
    this.sublocality.emit(this.service.route(place.address_components) ? this.service.route(place.address_components) : null) 
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
  }


}