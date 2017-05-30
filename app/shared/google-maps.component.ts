import {Component, ElementRef, ViewChild, Input, OnInit} from '@angular/core';
import {registerElement} from "nativescript-angular/element-registry";
import application = require('application');
let mapsModule = require("nativescript-google-maps-sdk");
let MapView = mapsModule.MapView;
import {Router} from "@angular/router";

registerElement("MapView", () => MapView);

declare var GMSServices;

if(application.ios) {
	GMSServices.provideAPIKey("AIzaSyBa4u8RqmRlpmI7ue-8UB1GWpY7Ub3Fe-c");
}

@Component({
	selector: 'trach-google-maps',
	template: `
    <MapView #map 
			(mapReady)="onMapReady($event)"
			(markerInfoWindowTapped)="this.onMarkerInfoWindowTapped($event)"></MapView>
    `
})
export class GoogleMapsComponent implements OnInit {
	@Input() onMarkerInfoWindowTapped: ($event) => void;
	@Input() markers: any;
	@ViewChild('map') mapView: ElementRef;
	private map;

	constructor() {}

	ngOnInit() {
		this.map = this.mapView.nativeElement;
	}

	onMapReady(event) {
		console.log("Map Ready");
		this.updateMap();
	};

	updateMap() {
		let map = this.mapView.nativeElement;
		this.centerMap(map, this.markers[0].position);
		this.setMarkers(map, this.markers);
	}

	setMarkers(map, markers) {
		markers.forEach(m => {
			let marker = new mapsModule.Marker();
			Object.assign(marker, m);
			marker.position = mapsModule.Position.positionFromLatLng(
				m.position.latitude,
				m.position.longitude
			);
			map.addMarker(marker);
		});
	}

	centerMap(map, point) {
		map.latitude = point.latitude;
		map.longitude = point.longitude;
		map.zoom = 14;
	}
}