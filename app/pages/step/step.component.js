"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("application");
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var settings_service_1 = require("../../pages/settings/settings.service");
var geolocation_service_1 = require("../../core/geolocation.service");
var page_1 = require("ui/page");
require("rxjs/add/operator/switchMap");
var rxjs_1 = require("rxjs");
var sound_service_1 = require("../../core/sound.service");
var step_service_1 = require("./step.service");
var step_config_1 = require("./step.config");
var player_strategy_1 = require("../../core/sound/player-strategy");
var vibrator = require('nativescript-vibrate');
var StepComponent = (function () {
    function StepComponent(settings, pageRoute, soundService, stepService, geolocationService, page, zone) {
        this.settings = settings;
        this.pageRoute = pageRoute;
        this.soundService = soundService;
        this.stepService = stepService;
        this.geolocationService = geolocationService;
        this.page = page;
        this.zone = zone;
        this.geoPosition = { longitude: 0, latitude: 0 };
        this.distanceBetweenLocations = 0;
        this.proximity = false;
        this.isNextStepUnlocked = false;
        this.routeParams$ = this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; });
    }
    StepComponent.prototype.ngOnInit = function () {
        this.soundService.setStrategy((app.android) ? new player_strategy_1.TNSPlayerStrategy() : new player_strategy_1.NativeScriptSoundStrategy());
        this.routeParams$
            .forEach(this.handleRouteChange.bind(this));
        this.handleLocation();
    };
    StepComponent.prototype.handleRouteChange = function (params) {
        this.setSteps(params);
        this.setBackgroundUrl();
        this.setActionBar(params);
        this.soundService.dispose();
    };
    StepComponent.prototype.setSteps = function (params) {
        var id = parseInt(params['id']);
        this.setActiveStep(id);
        this.setPrevStep(id);
        this.setNextStep(id);
    };
    StepComponent.prototype.setBackgroundUrl = function () {
        this.backgroundUrl = this.activeStep && this.activeStep.meta.image;
    };
    StepComponent.prototype.setActionBar = function (params) {
        this.page.actionBar.title = "Przystanek " + params['id'] + " z " + step_config_1.STEPS.length;
    };
    StepComponent.prototype.handleLocation = function () {
        if (!this.isWatched() && this.settings.geolocationEnabled) {
            this.watchLocation();
        }
    };
    StepComponent.prototype.isWatched = function () {
        return this.geoSubscription;
    };
    StepComponent.prototype.watchLocation = function () {
        var _this = this;
        this.geoSubscription = this.distanceWithRoute$
            .subscribe(function (geoData) {
            _this.geoPosition = geoData.location;
            _this.distanceBetweenLocations = geoData.distance;
            if (_this.settings.adventureModeEnabled) {
                _this.handleProximity(geoData.location, geoData.distance);
            }
        });
    };
    Object.defineProperty(StepComponent.prototype, "distanceWithRoute$", {
        get: function () {
            return rxjs_1.Observable.combineLatest(this.geolocationService.geolocation$, this.routeParams$)
                .map(function (_a) {
                var loc = _a[0], params = _a[1];
                return ({
                    location: loc,
                    target: step_config_1.STEPS[parseInt(params['id'])],
                    distance: Math.round(nativescript_geolocation_1.distance(loc, step_config_1.STEPS[parseInt(params['id']) - 1].location))
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    StepComponent.prototype.handleProximity = function (loc, dist) {
        if (this.isPristineProximity(dist)) {
            this.onProximity();
        }
        else {
            this.proximity = false;
        }
    };
    StepComponent.prototype.isPristineProximity = function (dist) {
        return !this.stepService.isVisited(this.activeStep) && dist < 10 && this.proximity === false;
    };
    StepComponent.prototype.onProximity = function () {
        this.proximity = true;
        this.stepService.addVisited(this.activeStep);
        this.unlockNextStep();
        vibrator.vibration();
        this.soundService.play(this.activeStep.audio.path);
    };
    StepComponent.prototype.setActiveStep = function (id) {
        this.activeStep = step_config_1.STEPS[id - 1];
    };
    StepComponent.prototype.setPrevStep = function (id) {
        var prevStepData = step_config_1.STEPS[id - 2];
        this.prevStep = prevStepData && {
            id: prevStepData.id,
            data: prevStepData,
            label: 'Poprzednie: ' + prevStepData.meta.title
        };
    };
    StepComponent.prototype.setNextStep = function (id) {
        var nextStepData = step_config_1.STEPS[id];
        this.nextStep = nextStepData && {
            id: nextStepData.id,
            data: nextStepData,
            label: 'Następne: ' + nextStepData.meta.title
        };
        this.isNextStepUnlocked = this.stepService.isUnlocked(this.nextStep);
        console.log('is unlocked? ', this.isNextStepUnlocked);
    };
    StepComponent.prototype.unlockNextStep = function () {
        this.stepService.unlock(this.nextStep);
        this.isNextStepUnlocked = true;
    };
    StepComponent.prototype.onReset = function () {
        this.soundService.reset();
    };
    StepComponent.prototype.onPause = function () {
        this.soundService.pause();
    };
    StepComponent.prototype.onPlay = function () {
        this.soundService.dispose();
        this.soundService.play(this.activeStep.audio.path);
    };
    StepComponent.prototype.onReplay = function () {
        this.soundService.replay();
    };
    StepComponent.prototype.ngOnDestroy = function () {
        if (this.geoSubscription) {
            this.geoSubscription.unsubscribe();
        }
        this.soundService.dispose();
    };
    return StepComponent;
}());
StepComponent = __decorate([
    core_1.Component({
        selector: 'app-step',
        templateUrl: './pages/step/step.component.html',
        styleUrls: ['./pages/step/step.component.css']
    }),
    __metadata("design:paramtypes", [settings_service_1.SettingsService,
        nativescript_angular_1.PageRoute,
        sound_service_1.SoundService,
        step_service_1.StepService,
        geolocation_service_1.GeolocationService,
        page_1.Page,
        core_1.NgZone])
], StepComponent);
exports.StepComponent = StepComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFvQztBQUNwQyxzQ0FBbUU7QUFDbkUsNkRBQStDO0FBQy9DLHFFQUE0RDtBQUM1RCwwRUFBc0U7QUFDdEUsc0VBQWtFO0FBRWxFLGdDQUE2QjtBQUU3Qix1Q0FBcUM7QUFDckMsNkJBQThDO0FBQzlDLDBEQUFzRDtBQUN0RCwrQ0FBMkM7QUFDM0MsNkNBQW9DO0FBQ3BDLG9FQUE4RztBQUM5RyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQU8vQyxJQUFhLGFBQWE7SUFhekIsdUJBQW9CLFFBQXlCLEVBQy9CLFNBQW9CLEVBQ3BCLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxJQUFVLEVBQ1YsSUFBWTtRQU5OLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBUTtRQWJsQixnQkFBVyxHQUF1QixFQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQzlELDZCQUF3QixHQUFXLENBQUMsQ0FBQztRQUdyQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQVMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUMvQyxTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLG1DQUFpQixFQUFFLEdBQUcsSUFBSSwyQ0FBeUIsRUFBRSxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLFlBQVk7YUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLE1BQU07UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxNQUFNO1FBQ2QsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsTUFBTTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsZ0JBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFNLG1CQUFLLENBQUMsTUFBUSxDQUFDO0lBQzVFLENBQUM7SUFFRCxzQ0FBYyxHQUFkO1FBQ0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDRixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQUEsaUJBU0M7UUFSQSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0I7YUFDNUMsU0FBUyxDQUFDLFVBQUMsT0FBTztZQUNsQixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDcEMsS0FBSSxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDakQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFJLDZDQUFrQjthQUF0QjtZQUNDLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLGFBQWEsQ0FDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FDakI7aUJBQ0MsR0FBRyxDQUFDLFVBQUMsRUFBYTtvQkFBWixXQUFHLEVBQUUsY0FBTTtnQkFBTSxPQUFBLENBQUM7b0JBQ3hCLFFBQVEsRUFBRSxHQUFHO29CQUNiLE1BQU0sRUFBRSxtQkFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsbUNBQVEsQ0FBVyxHQUFHLEVBQVksbUJBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ25HLENBQUM7WUFKc0IsQ0FJdEIsQ0FBQyxDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLEdBQUcsRUFBRSxJQUFJO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7SUFDRixDQUFDO0lBRUQsMkNBQW1CLEdBQW5CLFVBQW9CLElBQUk7UUFDdkIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUE7SUFDN0YsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLEVBQUU7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksRUFBRTtRQUNiLElBQUksWUFBWSxHQUFHLG1CQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxJQUFJO1lBQzlCLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNuQixJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsY0FBYyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSztTQUMvQyxDQUFBO0lBQ0gsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxFQUFFO1FBQ2IsSUFBSSxZQUFZLEdBQUcsbUJBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksSUFBSTtZQUM5QixFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsS0FBSyxFQUFFLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDN0MsQ0FBQTtRQUNGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLENBQUM7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUE5SkQsSUE4SkM7QUE5SlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztLQUM5QyxDQUFDO3FDQWM2QixrQ0FBZTtRQUNwQixnQ0FBUztRQUNOLDRCQUFZO1FBQ2IsMEJBQVc7UUFDSix3Q0FBa0I7UUFDaEMsV0FBSTtRQUNKLGFBQU07R0FuQmQsYUFBYSxDQThKekI7QUE5Slksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwID0gcmVxdWlyZSgnYXBwbGljYXRpb24nKTtcbmltcG9ydCB7Q29tcG9uZW50LCBOZ1pvbmUsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZVJvdXRlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7TG9jYXRpb24sIGRpc3RhbmNlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQge1NldHRpbmdzU2VydmljZX0gZnJvbSAnLi4vLi4vcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZSc7XG5pbXBvcnQge0dlb2xvY2F0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vY29yZS9nZW9sb2NhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtBY3Rpb25JdGVtfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTb3VuZFNlcnZpY2V9IGZyb20gJy4uLy4uL2NvcmUvc291bmQuc2VydmljZSc7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tICcuL3N0ZXAuc2VydmljZSc7XG5pbXBvcnQge1NURVBTfSBmcm9tICcuL3N0ZXAuY29uZmlnJztcbmltcG9ydCB7UGxheWVyU3RyYXRlZ3ksIFROU1BsYXllclN0cmF0ZWd5LCBOYXRpdmVTY3JpcHRTb3VuZFN0cmF0ZWd5fSBmcm9tIFwiLi4vLi4vY29yZS9zb3VuZC9wbGF5ZXItc3RyYXRlZ3lcIjtcbmxldCB2aWJyYXRvciA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC12aWJyYXRlJyk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FwcC1zdGVwJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL3N0ZXAvc3RlcC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3BhZ2VzL3N0ZXAvc3RlcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cdHByaXZhdGUgYWN0aXZlU3RlcDogYW55O1xuXHRwcml2YXRlIHByZXZTdGVwOiBhbnk7XG5cdHByaXZhdGUgbmV4dFN0ZXA6IGFueTtcblx0cHJpdmF0ZSBiYWNrZ3JvdW5kVXJsOiBzdHJpbmc7XG5cdHByaXZhdGUgZ2VvV2F0Y2hJZDogbnVtYmVyO1xuXHRwcml2YXRlIGdlb1Bvc2l0aW9uOiBMb2NhdGlvbiA9IDxMb2NhdGlvbj57bG9uZ2l0dWRlOiAwLCBsYXRpdHVkZTogMH07XG5cdHByaXZhdGUgZGlzdGFuY2VCZXR3ZWVuTG9jYXRpb25zOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIGdlb1N1YnNjcmlwdGlvbjtcblx0cHJpdmF0ZSByb3V0ZVBhcmFtcyQ6IE9ic2VydmFibGU8YW55Pjtcblx0cHJpdmF0ZSBwcm94aW1pdHk6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBpc05leHRTdGVwVW5sb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG5cdFx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG5cdFx0XHRcdFx0XHRcdHByaXZhdGUgc291bmRTZXJ2aWNlOiBTb3VuZFNlcnZpY2UsXG5cdFx0XHRcdFx0XHRcdHByaXZhdGUgc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLFxuXHRcdFx0XHRcdFx0XHRwcml2YXRlIGdlb2xvY2F0aW9uU2VydmljZTogR2VvbG9jYXRpb25TZXJ2aWNlLFxuXHRcdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2U6IFBhZ2UsXG5cdFx0XHRcdFx0XHRcdHByaXZhdGUgem9uZTogTmdab25lKSB7XG5cdFx0dGhpcy5yb3V0ZVBhcmFtcyQgPSB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuXHRcdFx0LnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb3VuZFNlcnZpY2Uuc2V0U3RyYXRlZ3koKGFwcC5hbmRyb2lkKSA/IG5ldyBUTlNQbGF5ZXJTdHJhdGVneSgpIDogbmV3IE5hdGl2ZVNjcmlwdFNvdW5kU3RyYXRlZ3koKSk7XG5cdFx0dGhpcy5yb3V0ZVBhcmFtcyRcblx0XHRcdC5mb3JFYWNoKHRoaXMuaGFuZGxlUm91dGVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5oYW5kbGVMb2NhdGlvbigpO1xuXHR9XG5cblx0aGFuZGxlUm91dGVDaGFuZ2UocGFyYW1zKSB7XG5cdFx0dGhpcy5zZXRTdGVwcyhwYXJhbXMpO1xuXHRcdHRoaXMuc2V0QmFja2dyb3VuZFVybCgpO1xuXHRcdHRoaXMuc2V0QWN0aW9uQmFyKHBhcmFtcyk7XG5cdFx0dGhpcy5zb3VuZFNlcnZpY2UuZGlzcG9zZSgpO1xuXHR9XG5cblx0c2V0U3RlcHMocGFyYW1zKSB7XG5cdFx0bGV0IGlkID0gcGFyc2VJbnQocGFyYW1zWydpZCddKTtcblx0XHR0aGlzLnNldEFjdGl2ZVN0ZXAoaWQpO1xuXHRcdHRoaXMuc2V0UHJldlN0ZXAoaWQpO1xuXHRcdHRoaXMuc2V0TmV4dFN0ZXAoaWQpO1xuXHR9XG5cblx0c2V0QmFja2dyb3VuZFVybCgpIHtcblx0XHR0aGlzLmJhY2tncm91bmRVcmwgPSB0aGlzLmFjdGl2ZVN0ZXAgJiYgdGhpcy5hY3RpdmVTdGVwLm1ldGEuaW1hZ2U7XG5cdH1cblxuXHRzZXRBY3Rpb25CYXIocGFyYW1zKSB7XG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9IGBQcnp5c3RhbmVrICR7cGFyYW1zWydpZCddfSB6ICR7U1RFUFMubGVuZ3RofWA7XG5cdH1cblxuXHRoYW5kbGVMb2NhdGlvbigpIHtcblx0XHRpZiAoIXRoaXMuaXNXYXRjaGVkKCkgJiYgdGhpcy5zZXR0aW5ncy5nZW9sb2NhdGlvbkVuYWJsZWQpIHtcblx0XHRcdHRoaXMud2F0Y2hMb2NhdGlvbigpO1xuXHRcdH1cblx0fVxuXG5cdGlzV2F0Y2hlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZW9TdWJzY3JpcHRpb247XG5cdH1cblxuXHR3YXRjaExvY2F0aW9uKCkge1xuXHRcdHRoaXMuZ2VvU3Vic2NyaXB0aW9uID0gdGhpcy5kaXN0YW5jZVdpdGhSb3V0ZSRcblx0XHRcdC5zdWJzY3JpYmUoKGdlb0RhdGEpID0+IHtcblx0XHRcdFx0dGhpcy5nZW9Qb3NpdGlvbiA9IGdlb0RhdGEubG9jYXRpb247XG5cdFx0XHRcdHRoaXMuZGlzdGFuY2VCZXR3ZWVuTG9jYXRpb25zID0gZ2VvRGF0YS5kaXN0YW5jZTtcblx0XHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuYWR2ZW50dXJlTW9kZUVuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZVByb3hpbWl0eShnZW9EYXRhLmxvY2F0aW9uLCBnZW9EYXRhLmRpc3RhbmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRnZXQgZGlzdGFuY2VXaXRoUm91dGUkKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIE9ic2VydmFibGUuY29tYmluZUxhdGVzdChcblx0XHRcdHRoaXMuZ2VvbG9jYXRpb25TZXJ2aWNlLmdlb2xvY2F0aW9uJCxcblx0XHRcdHRoaXMucm91dGVQYXJhbXMkXG5cdFx0KVxuXHRcdFx0Lm1hcCgoW2xvYywgcGFyYW1zXSkgPT4gKHtcblx0XHRcdFx0bG9jYXRpb246IGxvYyxcblx0XHRcdFx0dGFyZ2V0OiBTVEVQU1twYXJzZUludChwYXJhbXNbJ2lkJ10pXSxcblx0XHRcdFx0ZGlzdGFuY2U6IE1hdGgucm91bmQoZGlzdGFuY2UoPExvY2F0aW9uPmxvYywgPExvY2F0aW9uPlNURVBTW3BhcnNlSW50KHBhcmFtc1snaWQnXSkgLSAxXS5sb2NhdGlvbikpXG5cdFx0XHR9KSk7XG5cdH1cblxuXHRoYW5kbGVQcm94aW1pdHkobG9jLCBkaXN0KSB7XG5cdFx0aWYgKHRoaXMuaXNQcmlzdGluZVByb3hpbWl0eShkaXN0KSkge1xuXHRcdFx0dGhpcy5vblByb3hpbWl0eSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3hpbWl0eSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlzUHJpc3RpbmVQcm94aW1pdHkoZGlzdCkge1xuXHRcdHJldHVybiAhdGhpcy5zdGVwU2VydmljZS5pc1Zpc2l0ZWQodGhpcy5hY3RpdmVTdGVwKSAmJiBkaXN0IDwgMTAgJiYgdGhpcy5wcm94aW1pdHkgPT09IGZhbHNlXG5cdH1cblxuXHRvblByb3hpbWl0eSgpIHtcblx0XHR0aGlzLnByb3hpbWl0eSA9IHRydWU7XG5cdFx0dGhpcy5zdGVwU2VydmljZS5hZGRWaXNpdGVkKHRoaXMuYWN0aXZlU3RlcCk7XG5cdFx0dGhpcy51bmxvY2tOZXh0U3RlcCgpO1xuXHRcdHZpYnJhdG9yLnZpYnJhdGlvbigpO1xuXHRcdHRoaXMuc291bmRTZXJ2aWNlLnBsYXkodGhpcy5hY3RpdmVTdGVwLmF1ZGlvLnBhdGgpO1xuXHR9XG5cblx0c2V0QWN0aXZlU3RlcChpZCkge1xuXHRcdHRoaXMuYWN0aXZlU3RlcCA9IFNURVBTW2lkIC0gMV07XG5cdH1cblxuXHRzZXRQcmV2U3RlcChpZCkge1xuXHRcdGxldCBwcmV2U3RlcERhdGEgPSBTVEVQU1tpZCAtIDJdXG5cdFx0dGhpcy5wcmV2U3RlcCA9IHByZXZTdGVwRGF0YSAmJiB7XG5cdFx0XHRcdGlkOiBwcmV2U3RlcERhdGEuaWQsXG5cdFx0XHRcdGRhdGE6IHByZXZTdGVwRGF0YSxcblx0XHRcdFx0bGFiZWw6ICdQb3ByemVkbmllOiAnICsgcHJldlN0ZXBEYXRhLm1ldGEudGl0bGVcblx0XHRcdH1cblx0fVxuXG5cdHNldE5leHRTdGVwKGlkKSB7XG5cdFx0bGV0IG5leHRTdGVwRGF0YSA9IFNURVBTW2lkXTtcblx0XHR0aGlzLm5leHRTdGVwID0gbmV4dFN0ZXBEYXRhICYmIHtcblx0XHRcdFx0aWQ6IG5leHRTdGVwRGF0YS5pZCxcblx0XHRcdFx0ZGF0YTogbmV4dFN0ZXBEYXRhLFxuXHRcdFx0XHRsYWJlbDogJ05hc3TEmXBuZTogJyArIG5leHRTdGVwRGF0YS5tZXRhLnRpdGxlXG5cdFx0XHR9XG5cdFx0dGhpcy5pc05leHRTdGVwVW5sb2NrZWQgPSB0aGlzLnN0ZXBTZXJ2aWNlLmlzVW5sb2NrZWQodGhpcy5uZXh0U3RlcCk7XG5cdFx0Y29uc29sZS5sb2coJ2lzIHVubG9ja2VkPyAnLCB0aGlzLmlzTmV4dFN0ZXBVbmxvY2tlZClcblx0fVxuXG5cdHVubG9ja05leHRTdGVwKCkge1xuXHRcdHRoaXMuc3RlcFNlcnZpY2UudW5sb2NrKHRoaXMubmV4dFN0ZXApO1xuXHRcdHRoaXMuaXNOZXh0U3RlcFVubG9ja2VkID0gdHJ1ZTtcblx0fVxuXG5cdG9uUmVzZXQoKSB7XG5cdFx0dGhpcy5zb3VuZFNlcnZpY2UucmVzZXQoKTtcblx0fVxuXG5cdG9uUGF1c2UoKSB7XG5cdFx0dGhpcy5zb3VuZFNlcnZpY2UucGF1c2UoKTtcblx0fVxuXG5cdG9uUGxheSgpIHtcblx0XHR0aGlzLnNvdW5kU2VydmljZS5kaXNwb3NlKCk7XG5cdFx0dGhpcy5zb3VuZFNlcnZpY2UucGxheSh0aGlzLmFjdGl2ZVN0ZXAuYXVkaW8ucGF0aCk7XG5cdH1cblxuXHRvblJlcGxheSgpIHtcblx0XHR0aGlzLnNvdW5kU2VydmljZS5yZXBsYXkoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLmdlb1N1YnNjcmlwdGlvbikge1xuXHRcdFx0dGhpcy5nZW9TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cdFx0dGhpcy5zb3VuZFNlcnZpY2UuZGlzcG9zZSgpO1xuXHR9XG59Il19