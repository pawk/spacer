"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sound = require('nativescript-sound');
var NativeScriptSoundStrategy = (function () {
    function NativeScriptSoundStrategy() {
        this.isDisposable = false;
    }
    NativeScriptSoundStrategy.prototype.play = function (filepath) {
        this.player = sound.create(filepath);
        this.player.play();
        this.isDisposable = true;
    };
    NativeScriptSoundStrategy.prototype.pause = function () {
        this.player && this.player.stop();
    };
    NativeScriptSoundStrategy.prototype.replay = function () {
        this.reset();
        this.resume();
    };
    NativeScriptSoundStrategy.prototype.resume = function () {
        this.player && this.player.play();
    };
    NativeScriptSoundStrategy.prototype.reset = function () {
        this.player && this.player.stop();
        //this.play();
    };
    NativeScriptSoundStrategy.prototype.dispose = function () {
        this.player && this.isDisposable && this.player.stop();
        this.isDisposable = false;
    };
    return NativeScriptSoundStrategy;
}());
exports.NativeScriptSoundStrategy = NativeScriptSoundStrategy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlc2NyaXB0LXNvdW5kLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF0aXZlc2NyaXB0LXNvdW5kLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFMUM7SUFBQTtRQUVRLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBOEJ0QyxDQUFDO0lBNUJBLHdDQUFJLEdBQUosVUFBSyxRQUFnQjtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQseUNBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsMENBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCwwQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCx5Q0FBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLGNBQWM7SUFDZixDQUFDO0lBRUQsMkNBQU8sR0FBUDtRQUNDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRixnQ0FBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbGF5ZXJTdHJhdGVneX0gZnJvbSBcIi4vcGxheWVyLXN0cmF0ZWd5XCJcbmxldCBzb3VuZCA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1zb3VuZCcpO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlU2NyaXB0U291bmRTdHJhdGVneSBpbXBsZW1lbnRzIFBsYXllclN0cmF0ZWd5IHtcblx0cHJpdmF0ZSBwbGF5ZXJcblx0cHVibGljIGlzRGlzcG9zYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHBsYXkoZmlsZXBhdGg6IHN0cmluZykge1xuXHRcdHRoaXMucGxheWVyID0gc291bmQuY3JlYXRlKGZpbGVwYXRoKTtcblx0XHR0aGlzLnBsYXllci5wbGF5KCk7XG5cdFx0dGhpcy5pc0Rpc3Bvc2FibGUgPSB0cnVlO1xuXHR9XG5cblx0cGF1c2UoKSB7XG5cdFx0dGhpcy5wbGF5ZXIgJiYgdGhpcy5wbGF5ZXIuc3RvcCgpXG5cdH1cblxuXHRyZXBsYXkoKSB7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHRcdHRoaXMucmVzdW1lKCk7XG5cdH1cblxuXHRyZXN1bWUoKSB7XG5cdFx0dGhpcy5wbGF5ZXIgJiYgdGhpcy5wbGF5ZXIucGxheSgpO1xuXHR9XG5cblx0cmVzZXQoKSB7XG5cdFx0dGhpcy5wbGF5ZXIgJiYgdGhpcy5wbGF5ZXIuc3RvcCgpO1xuXHRcdC8vdGhpcy5wbGF5KCk7XG5cdH1cblxuXHRkaXNwb3NlKCkge1xuXHRcdHRoaXMucGxheWVyICYmIHRoaXMuaXNEaXNwb3NhYmxlICYmIHRoaXMucGxheWVyLnN0b3AoKTtcblx0XHR0aGlzLmlzRGlzcG9zYWJsZSA9IGZhbHNlO1xuXHR9XG59Il19