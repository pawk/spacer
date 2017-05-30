"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_audio_1 = require("nativescript-audio");
var TNSPlayerStrategy = (function () {
    function TNSPlayerStrategy() {
        this.isDisposable = false;
        this.player = new nativescript_audio_1.TNSPlayer();
    }
    TNSPlayerStrategy.prototype.play = function (filepath) {
        var _this = this;
        this.player.playFromFile({ audioFile: filepath }).then(function () {
            console.log('is playing');
            _this.isDisposable = true;
        }, function (err) {
            console.log(err);
        });
    };
    TNSPlayerStrategy.prototype.pause = function () {
        if (this.player.isAudioPlaying()) {
            this.player.pause();
        }
    };
    TNSPlayerStrategy.prototype.replay = function () {
        this.reset();
        this.resume();
    };
    TNSPlayerStrategy.prototype.resume = function () {
        this.player.resume();
    };
    TNSPlayerStrategy.prototype.reset = function () {
        this.player.seekTo(0);
    };
    TNSPlayerStrategy.prototype.dispose = function () {
        if (this.isDisposable) {
            this.pause();
            this.player.dispose();
            this.isDisposable = false;
        }
    };
    return TNSPlayerStrategy;
}());
exports.TNSPlayerStrategy = TNSPlayerStrategy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG5zLXBsYXllci1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRucy1wbGF5ZXItc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5REFBNkM7QUFFN0M7SUFJQztRQUZPLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBR3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFJLEdBQUosVUFBSyxRQUFnQjtRQUFyQixpQkFVQztRQVRBLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUNuRDtZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxFQUNELFVBQUMsR0FBRztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNGLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDRixDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGxheWVyU3RyYXRlZ3l9IGZyb20gXCIuL3BsYXllci1zdHJhdGVneVwiXG5pbXBvcnQge1ROU1BsYXllcn0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcblxuZXhwb3J0IGNsYXNzIFROU1BsYXllclN0cmF0ZWd5IGltcGxlbWVudHMgUGxheWVyU3RyYXRlZ3kge1xuXHRwcml2YXRlIHBsYXllclxuXHRwdWJsaWMgaXNEaXNwb3NhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5wbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XG5cdH1cblxuXHRwbGF5KGZpbGVwYXRoOiBzdHJpbmcpIHtcblx0XHR0aGlzLnBsYXllci5wbGF5RnJvbUZpbGUoe2F1ZGlvRmlsZTogZmlsZXBhdGh9KS50aGVuKFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnaXMgcGxheWluZycpO1xuXHRcdFx0XHR0aGlzLmlzRGlzcG9zYWJsZSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0KGVycikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHRpZiAodGhpcy5wbGF5ZXIuaXNBdWRpb1BsYXlpbmcoKSkge1xuXHRcdFx0dGhpcy5wbGF5ZXIucGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHRyZXBsYXkoKSB7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHRcdHRoaXMucmVzdW1lKCk7XG5cdH1cblxuXHRyZXN1bWUoKSB7XG5cdFx0dGhpcy5wbGF5ZXIucmVzdW1lKCk7XG5cdH1cblxuXHRyZXNldCgpIHtcblx0XHR0aGlzLnBsYXllci5zZWVrVG8oMClcblx0fVxuXG5cdGRpc3Bvc2UoKSB7XG5cdFx0aWYgKHRoaXMuaXNEaXNwb3NhYmxlKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHR0aGlzLnBsYXllci5kaXNwb3NlKCk7XG5cdFx0XHR0aGlzLmlzRGlzcG9zYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxufSJdfQ==