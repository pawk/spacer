import {NgZone} from '@angular/core';
import {Injectable} from '@angular/core';
import {watchLocation, clearWatch, Location, distance} from 'nativescript-geolocation';
import {Accuracy} from 'ui/enums';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class GeolocationService {
	private subject;
	private watchId;
	public position$;

	constructor(private zone: NgZone) {

	}

	watchLocation(options) {
		this.stopWatchingLocation();
		this.subject = new Subject();
		this.watchId = watchLocation(
			(loc: Location) => {
				this.zone.run(() => {
					this.subject.next(loc);
				});
			},
			function (e) {
				console.log("Error: " + e.message);
			},
			options);
		return this.subject.asObservable();
	}

	stopWatchingLocation() {
		if (this.watchId) {
			clearWatch(this.watchId);
		}
	}

	get geolocation$() {
		return this.watchLocation({
			desiredAccuracy: Accuracy.high,
			updateDistance: 0.1,
			minimumUpdateTime: 100
		});
	}

	getDistance$(target: Location) {
		return this.geolocation$
			.map((loc) => ({
				location: loc,
				target,
				distance: Math.round(distance(loc, target))
			}));
	}
}