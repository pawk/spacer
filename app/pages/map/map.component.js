"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var step_service_1 = require("../step/step.service");
var router_1 = require("@angular/router");
var MapComponent = (function () {
    function MapComponent(stepService, router) {
        this.stepService = stepService;
        this.router = router;
        this.markers = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stepService.getSteps().forEach(function (step) {
            var marker = {};
            marker.position = step.location;
            marker.title = step.meta.title;
            marker.snippet = step.meta.title;
            marker.userData = { route: ['step/', step.id], index: step.id };
            _this.markers.push(marker);
        });
        this.onMarkerInfoWindowTapped = (function (router) {
            return function (event) { return router.navigate(event.marker.userData.route); };
        })(this.router);
    };
    return MapComponent;
}());
__decorate([
    core_1.ViewChild('map'),
    __metadata("design:type", core_1.ElementRef)
], MapComponent.prototype, "mapView", void 0);
MapComponent = __decorate([
    core_1.Component({
        template: "\n    <GridLayout>\n    \t<trach-google-maps \n    \t[markers]=\"markers\"\n    \t[onMarkerInfoWindowTapped]=\"onMarkerInfoWindowTapped\"></trach-google-maps>    \n    </GridLayout>\n    "
    }),
    __metadata("design:paramtypes", [step_service_1.StepService, router_1.Router])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Q7QUFDL0QscURBQWlEO0FBQ2pELDBDQUF1QztBQVd2QyxJQUFhLFlBQVk7SUFLeEIsc0JBQW9CLFdBQXdCLEVBQVUsTUFBYztRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFINUQsWUFBTyxHQUFVLEVBQUUsQ0FBQztJQUcyQyxDQUFDO0lBRXhFLCtCQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUN2QyxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUM7WUFDckIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUcsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHdCQUF3QixHQUFHLENBQUMsVUFBUyxNQUFNO1lBQy9DLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQTVDLENBQTRDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2hCLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUFyQmtCO0lBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDOzhCQUFVLGlCQUFVOzZDQUFDO0FBRDFCLFlBQVk7SUFUeEIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSw2TEFNTjtLQUNKLENBQUM7cUNBTWdDLDBCQUFXLEVBQWtCLGVBQU07R0FMeEQsWUFBWSxDQXNCeEI7QUF0Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gJy4uL3N0ZXAvc3RlcC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuICAgIDxHcmlkTGF5b3V0PlxuICAgIFx0PHRyYWNoLWdvb2dsZS1tYXBzIFxuICAgIFx0W21hcmtlcnNdPVwibWFya2Vyc1wiXG4gICAgXHRbb25NYXJrZXJJbmZvV2luZG93VGFwcGVkXT1cIm9uTWFya2VySW5mb1dpbmRvd1RhcHBlZFwiPjwvdHJhY2gtZ29vZ2xlLW1hcHM+ICAgIFxuICAgIDwvR3JpZExheW91dD5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ21hcCcpIG1hcFZpZXc6IEVsZW1lbnRSZWY7XG5cdHByaXZhdGUgbWFya2VyczogYW55W10gPSBbXTtcblx0cHJpdmF0ZSBvbk1hcmtlckluZm9XaW5kb3dUYXBwZWQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdGVwU2VydmljZS5nZXRTdGVwcygpLmZvckVhY2goc3RlcCA9PiB7XG5cdFx0XHRsZXQgbWFya2VyID0gPGFueT57fTtcblx0XHRcdG1hcmtlci5wb3NpdGlvbiA9IHN0ZXAubG9jYXRpb247XG5cdFx0XHRtYXJrZXIudGl0bGUgPSBzdGVwLm1ldGEudGl0bGU7XG5cdFx0XHRtYXJrZXIuc25pcHBldCA9IHN0ZXAubWV0YS50aXRsZTtcblx0XHRcdG1hcmtlci51c2VyRGF0YSA9IHsgcm91dGU6IFsnc3RlcC8nLCBzdGVwLmlkXSwgaW5kZXggOiBzdGVwLmlkfTtcblx0XHRcdHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uTWFya2VySW5mb1dpbmRvd1RhcHBlZCA9IChmdW5jdGlvbihyb3V0ZXIpIHtcblx0XHRcdHJldHVybiBldmVudCA9PiByb3V0ZXIubmF2aWdhdGUoZXZlbnQubWFya2VyLnVzZXJEYXRhLnJvdXRlKTtcblx0XHR9KSh0aGlzLnJvdXRlcilcblx0fVxuXG59Il19