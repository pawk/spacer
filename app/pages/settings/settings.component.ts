import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
import {SettingsService} from './settings.service';
import {Page} from "ui/page";

@Component({
	moduleId: module.id,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(private router: Router, private settings: SettingsService, private page: Page) {}

	ngOnInit() {
		this.page.actionBar.title = 'Ustawienia';
	}

	onGeoSwitchChange(val) {
		this.settings.geolocationEnabled = val;
		if (val && !isEnabled()) {
			enableLocationRequest().catch(() => {
				this.onGeoSwitchChange(false);
				alert('Musisz udzielić zgody na użycie przez nas usług lokalizacji - zrób to w ustawieniach swojego telefonu.')
			});
		}
	}

	onAdventureSwitchChange(val) {
		this.settings.adventureModeEnabled = val;
	}
}
