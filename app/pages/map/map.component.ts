import {Component, ElementRef, ViewChild} from '@angular/core';
import {StepService} from '../step/step.service';
import {Router} from "@angular/router";

@Component({
	template: `
    <GridLayout>
    	<trach-google-maps 
    	[markers]="markers"
    	[onMarkerInfoWindowTapped]="onMarkerInfoWindowTapped"></trach-google-maps>    
    </GridLayout>
    `
})
export class MapComponent {
	@ViewChild('map') mapView: ElementRef;
	private markers: any[] = [];
	private onMarkerInfoWindowTapped;

	constructor(private stepService: StepService, private router: Router) {}

	ngOnInit() {
		this.stepService.getSteps().forEach(step => {
			let marker = <any>{};
			marker.position = step.location;
			marker.title = step.meta.title;
			marker.snippet = step.meta.title;
			marker.userData = { route: ['step/', step.id], index : step.id};
			this.markers.push(marker);
		});

		this.onMarkerInfoWindowTapped = (function(router) {
			return event => router.navigate(event.marker.userData.route);
		})(this.router)
	}

}