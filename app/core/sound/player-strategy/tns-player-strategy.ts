import {PlayerStrategy} from "./player-strategy"
import {TNSPlayer} from 'nativescript-audio';

export class TNSPlayerStrategy implements PlayerStrategy {
	private player
	public isDisposable: boolean = false;

	constructor() {
		this.player = new TNSPlayer();
	}

	play(filepath: string) {
		this.player.playFromFile({audioFile: filepath}).then(
			() => {
				console.log('is playing');
				this.isDisposable = true;
			},
			(err) => {
				console.log(err);
			}
		);
	}

	pause() {
		if (this.player.isAudioPlaying()) {
			this.player.pause();
		}
	}

	replay() {
		this.reset();
		this.resume();
	}

	resume() {
		this.player.resume();
	}

	reset() {
		this.player.seekTo(0)
	}

	dispose() {
		if (this.isDisposable) {
			this.pause();
			this.player.dispose();
			this.isDisposable = false;
		}
	}
}