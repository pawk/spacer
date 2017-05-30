"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sound_service_1 = require("../../core/sound.service");
var step_config_1 = require("./step.config");
var settings_service_1 = require("../settings/settings.service");
var StepService = (function () {
    function StepService(soundService, settings) {
        this.soundService = soundService;
        this.settings = settings;
        this.visitedArray = [];
        this.unlockedArray = [];
    }
    StepService.prototype.wasVisited = function (step) {
        return this.isVisited(step);
    };
    StepService.prototype.isVisited = function (step) {
        return this.visitedArray.indexOf(step.id) !== -1;
    };
    StepService.prototype.addVisited = function (step) {
        if (!this.wasVisited(step.id)) {
            this.visitedArray.push(step.id);
        }
    };
    StepService.prototype.getAllVisited = function () {
        var _this = this;
        return step_config_1.STEPS.filter(function (s) { return _this.visitedArray.indexOf(s.id) !== -1; });
    };
    StepService.prototype.isUnlocked = function (step) {
        return !this.settings.adventureModeEnabled || this.unlockedArray.indexOf(step.id) !== -1;
    };
    StepService.prototype.unlock = function (step) {
        if (this.unlockedArray.indexOf(step.id) === -1) {
            console.log('unlocking - tu !');
            this.unlockedArray.push(step.id);
        }
    };
    StepService.prototype.getLastUnlocked = function () {
        var lastUnlockedId = Math.max.apply(Math, this.unlockedArray);
        return this.getSteps().find(function (v) { return v.id === lastUnlockedId; });
    };
    StepService.prototype.getSteps = function () {
        return step_config_1.STEPS;
    };
    StepService.prototype.next = function () {
    };
    StepService.prototype.prev = function () {
    };
    return StepService;
}());
StepService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [sound_service_1.SoundService, settings_service_1.SettingsService])
], StepService);
exports.StepService = StepService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RlcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBEQUFzRDtBQUN0RCw2Q0FBb0M7QUFDcEMsaUVBQTZEO0FBRzdELElBQWEsV0FBVztJQUl2QixxQkFBb0IsWUFBMEIsRUFBVSxRQUF5QjtRQUE3RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBSHpFLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO0lBRWlELENBQUM7SUFFcEYsZ0NBQVUsR0FBVixVQUFXLElBQUk7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLElBQUk7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNkLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0YsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFBQSxpQkFFQztRQURBLE1BQU0sQ0FBQyxtQkFBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNkLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBSTtRQUNWLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0YsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFSLElBQUksRUFBUSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLGNBQWMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0MsTUFBTSxDQUFDLG1CQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQsMEJBQUksR0FBSjtJQUVBLENBQUM7SUFFRCwwQkFBSSxHQUFKO0lBRUEsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQztBQW5EWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBS3NCLDRCQUFZLEVBQW9CLGtDQUFlO0dBSnJFLFdBQVcsQ0FtRHZCO0FBbkRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U291bmRTZXJ2aWNlfSBmcm9tICcuLi8uLi9jb3JlL3NvdW5kLnNlcnZpY2UnO1xuaW1wb3J0IHtTVEVQU30gZnJvbSAnLi9zdGVwLmNvbmZpZyc7XG5pbXBvcnQge1NldHRpbmdzU2VydmljZX0gZnJvbSBcIi4uL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0ZXBTZXJ2aWNlIHtcblx0cHJpdmF0ZSB2aXNpdGVkQXJyYXk6IGFueVtdID0gW107XG5cdHByaXZhdGUgdW5sb2NrZWRBcnJheTogYW55W10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdW5kU2VydmljZTogU291bmRTZXJ2aWNlLCBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2Upe31cblxuXHR3YXNWaXNpdGVkKHN0ZXApIHtcblx0XHRyZXR1cm4gdGhpcy5pc1Zpc2l0ZWQoc3RlcCk7XG5cdH1cblxuXHRpc1Zpc2l0ZWQoc3RlcCkge1xuXHRcdHJldHVybiB0aGlzLnZpc2l0ZWRBcnJheS5pbmRleE9mKHN0ZXAuaWQpICE9PSAtMTtcblx0fVxuXG5cdGFkZFZpc2l0ZWQoc3RlcCkge1xuXHRcdGlmICghdGhpcy53YXNWaXNpdGVkKHN0ZXAuaWQpKSB7XG5cdFx0XHR0aGlzLnZpc2l0ZWRBcnJheS5wdXNoKHN0ZXAuaWQpO1xuXHRcdH1cblx0fVxuXG5cdGdldEFsbFZpc2l0ZWQoKSB7XG5cdFx0cmV0dXJuIFNURVBTLmZpbHRlcihzID0+IHRoaXMudmlzaXRlZEFycmF5LmluZGV4T2Yocy5pZCkgIT09IC0xKTtcblx0fVxuXG5cdGlzVW5sb2NrZWQoc3RlcCkge1xuXHRcdHJldHVybiAhdGhpcy5zZXR0aW5ncy5hZHZlbnR1cmVNb2RlRW5hYmxlZCB8fCB0aGlzLnVubG9ja2VkQXJyYXkuaW5kZXhPZihzdGVwLmlkKSAhPT0gLTE7XG5cdH1cblxuXHR1bmxvY2soc3RlcCkge1xuXHRcdGlmICh0aGlzLnVubG9ja2VkQXJyYXkuaW5kZXhPZihzdGVwLmlkKSA9PT0gLTEpIHtcblx0XHRcdGNvbnNvbGUubG9nKCd1bmxvY2tpbmcgLSB0dSAhJylcblx0XHRcdHRoaXMudW5sb2NrZWRBcnJheS5wdXNoKHN0ZXAuaWQpO1xuXHRcdH1cblx0fVxuXG5cdGdldExhc3RVbmxvY2tlZCgpIHtcblx0XHRsZXQgbGFzdFVubG9ja2VkSWQgPSBNYXRoLm1heCguLi50aGlzLnVubG9ja2VkQXJyYXkpO1xuXHRcdHJldHVybiB0aGlzLmdldFN0ZXBzKCkuZmluZCgodikgPT4gdi5pZCA9PT0gbGFzdFVubG9ja2VkSWQpO1xuXHR9XG5cblx0Z2V0U3RlcHMoKTogYW55W10ge1xuXHRcdHJldHVybiBTVEVQUztcblx0fVxuXG5cdG5leHQoKSB7XG5cblx0fVxuXG5cdHByZXYoKXtcblxuXHR9XG59Il19