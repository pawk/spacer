import {Injectable} from '@angular/core';
import {ConfigService} from '../../core/config.service';
import {isEnabled} from 'nativescript-geolocation';

@Injectable()
export class SettingsService {
	constructor(private config: ConfigService) {}

	get geolocationEnabled() {
		return this.config.get('service.geolocation.enabled') && isEnabled();
	}

	set geolocationEnabled(val) {
		this.config.set('service.geolocation.enabled', val);
	}

	get adventureModeEnabled() {
		return this.config.get('app.adventureMode.enabled') && this.geolocationEnabled;
	}

	set adventureModeEnabled(val) {
		this.config.set('app.adventureMode.enabled', val);
	}
}