import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
import {StepService} from "../step/step.service";
import {PageRoute} from "nativescript-angular";

@Component({
	moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private hamburgerMenuIcon = String.fromCharCode(0xe903);
	private lastUnlockedStep: any;

  constructor(private pageRoute: PageRoute, private stepService: StepService) {
		enableLocationRequest().then(() => {

		});

		//this.stepService.unlock(this.stepService.getSteps()[0])
	}

	ngOnInit() {
		this.pageRoute.activatedRoute
			.forEach(() => this.lastUnlockedStep = this.stepService.getLastUnlocked());
	}
}
