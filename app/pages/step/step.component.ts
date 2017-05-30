import app = require('application');
import {Component, NgZone, OnInit, OnDestroy} from '@angular/core';
import {PageRoute} from "nativescript-angular";
import {Location, distance} from "nativescript-geolocation";
import {SettingsService} from '../../pages/settings/settings.service';
import {GeolocationService} from '../../core/geolocation.service';

import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import 'rxjs/add/operator/switchMap';
import {Observable, Subscription} from 'rxjs';
import {SoundService} from '../../core/sound.service';
import {StepService} from './step.service';
import {STEPS} from './step.config';
import {PlayerStrategy, TNSPlayerStrategy, NativeScriptSoundStrategy} from "../../core/sound/player-strategy";
let vibrator = require('nativescript-vibrate');

@Component({
	selector: 'app-step',
	templateUrl: './pages/step/step.component.html',
	styleUrls: ['./pages/step/step.component.css']
})
export class StepComponent implements OnDestroy {
	private activeStep: any;
	private prevStep: any;
	private nextStep: any;
	private backgroundUrl: string;
	private geoWatchId: number;
	private geoPosition: Location = <Location>{longitude: 0, latitude: 0};
	private distanceBetweenLocations: number = 0;
	private geoSubscription;
	private routeParams$: Observable<any>;
	private proximity: boolean = false;
	private isNextStepUnlocked: boolean = false;

	constructor(private settings: SettingsService,
							private pageRoute: PageRoute,
							private soundService: SoundService,
							private stepService: StepService,
							private geolocationService: GeolocationService,
							private page: Page,
							private zone: NgZone) {
		this.routeParams$ = this.pageRoute.activatedRoute
			.switchMap(activatedRoute => activatedRoute.params);
	}

	ngOnInit() {
		this.soundService.setStrategy((app.android) ? new TNSPlayerStrategy() : new NativeScriptSoundStrategy());
		this.routeParams$
			.forEach(this.handleRouteChange.bind(this));
		this.handleLocation();
	}

	handleRouteChange(params) {
		this.setSteps(params);
		this.setBackgroundUrl();
		this.setActionBar(params);
		this.soundService.dispose();
	}

	setSteps(params) {
		let id = parseInt(params['id']);
		this.setActiveStep(id);
		this.setPrevStep(id);
		this.setNextStep(id);
	}

	setBackgroundUrl() {
		this.backgroundUrl = this.activeStep && this.activeStep.meta.image;
	}

	setActionBar(params) {
		this.page.actionBar.title = `Przystanek ${params['id']} z ${STEPS.length}`;
	}

	handleLocation() {
		if (!this.isWatched() && this.settings.geolocationEnabled) {
			this.watchLocation();
		}
	}

	isWatched() {
		return this.geoSubscription;
	}

	watchLocation() {
		this.geoSubscription = this.distanceWithRoute$
			.subscribe((geoData) => {
				this.geoPosition = geoData.location;
				this.distanceBetweenLocations = geoData.distance;
				if (this.settings.adventureModeEnabled) {
					this.handleProximity(geoData.location, geoData.distance);
				}
			});
	}

	get distanceWithRoute$(): Observable<any> {
		return Observable.combineLatest(
			this.geolocationService.geolocation$,
			this.routeParams$
		)
			.map(([loc, params]) => ({
				location: loc,
				target: STEPS[parseInt(params['id'])],
				distance: Math.round(distance(<Location>loc, <Location>STEPS[parseInt(params['id']) - 1].location))
			}));
	}

	handleProximity(loc, dist) {
		if (this.isPristineProximity(dist)) {
			this.onProximity();
		} else {
			this.proximity = false;
		}
	}

	isPristineProximity(dist) {
		return !this.stepService.isVisited(this.activeStep) && dist < 10 && this.proximity === false
	}

	onProximity() {
		this.proximity = true;
		this.stepService.addVisited(this.activeStep);
		this.unlockNextStep();
		vibrator.vibration();
		this.soundService.play(this.activeStep.audio.path);
	}

	setActiveStep(id) {
		this.activeStep = STEPS[id - 1];
	}

	setPrevStep(id) {
		let prevStepData = STEPS[id - 2]
		this.prevStep = prevStepData && {
				id: prevStepData.id,
				data: prevStepData,
				label: 'Poprzednie: ' + prevStepData.meta.title
			}
	}

	setNextStep(id) {
		let nextStepData = STEPS[id];
		this.nextStep = nextStepData && {
				id: nextStepData.id,
				data: nextStepData,
				label: 'Następne: ' + nextStepData.meta.title
			}
		this.isNextStepUnlocked = this.stepService.isUnlocked(this.nextStep);
		console.log('is unlocked? ', this.isNextStepUnlocked)
	}

	unlockNextStep() {
		this.stepService.unlock(this.nextStep);
		this.isNextStepUnlocked = true;
	}

	onReset() {
		this.soundService.reset();
	}

	onPause() {
		this.soundService.pause();
	}

	onPlay() {
		this.soundService.dispose();
		this.soundService.play(this.activeStep.audio.path);
	}

	onReplay() {
		this.soundService.replay();
	}

	ngOnDestroy() {
		if (this.geoSubscription) {
			this.geoSubscription.unsubscribe();
		}
		this.soundService.dispose();
	}
}