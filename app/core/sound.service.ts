import { Injectable } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';
import {PlayerStrategy} from "../core/sound/player-strategy";

@Injectable()
export class SoundService {
	private audio2: any;
	private strategy: PlayerStrategy;

	setStrategy(strategy: PlayerStrategy) {
		this.strategy = strategy;
	}

	play(path) {
		this.strategy.play(path);
	}

	pause() {
		this.strategy.pause();
	}

	dispose() {
		if (this.strategy.isDisposable) {
			this.strategy.dispose();
		}
	}

	reset() {
		this.strategy.reset();
	}

	replay() {
		this.strategy.replay();
	}

}
