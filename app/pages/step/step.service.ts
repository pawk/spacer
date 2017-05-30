import {Injectable} from '@angular/core';
import {SoundService} from '../../core/sound.service';
import {STEPS} from './step.config';
import {SettingsService} from "../settings/settings.service";

@Injectable()
export class StepService {
	private visitedArray: any[] = [];
	private unlockedArray: any[] = [];

	constructor(private soundService: SoundService, private settings: SettingsService){}

	wasVisited(step) {
		return this.isVisited(step);
	}

	isVisited(step) {
		return this.visitedArray.indexOf(step.id) !== -1;
	}

	addVisited(step) {
		if (!this.wasVisited(step.id)) {
			this.visitedArray.push(step.id);
		}
	}

	getAllVisited() {
		return STEPS.filter(s => this.visitedArray.indexOf(s.id) !== -1);
	}

	isUnlocked(step) {
		return !this.settings.adventureModeEnabled || this.unlockedArray.indexOf(step.id) !== -1;
	}

	unlock(step) {
		if (this.unlockedArray.indexOf(step.id) === -1) {
			console.log('unlocking - tu !')
			this.unlockedArray.push(step.id);
		}
	}

	getLastUnlocked() {
		let lastUnlockedId = Math.max(...this.unlockedArray);
		return this.getSteps().find((v) => v.id === lastUnlockedId);
	}

	getSteps(): any[] {
		return STEPS;
	}

	next() {

	}

	prev(){

	}
}