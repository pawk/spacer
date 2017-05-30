export interface PlayerStrategy {
	isDisposable: boolean
	play(filepath: string)
	pause()
	resume()
	reset()
	replay()
	dispose()
}