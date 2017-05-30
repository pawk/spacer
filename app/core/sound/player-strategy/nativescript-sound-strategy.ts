import {PlayerStrategy} from "./player-strategy"
let sound = require('nativescript-sound');

export class NativeScriptSoundStrategy implements PlayerStrategy {
	private player
	public isDisposable: boolean = false;

	play(filepath: string) {
		this.player = sound.create(filepath);
		this.player.play();
		this.isDisposable = true;
	}

	pause() {
		this.player && this.player.stop()
	}

	replay() {
		this.reset();
		this.resume();
	}

	resume() {
		this.player && this.player.play();
	}

	reset() {
		this.player && this.player.stop();
		//this.play();
	}

	dispose() {
		this.player && this.isDisposable && this.player.stop();
		this.isDisposable = false;
	}
}