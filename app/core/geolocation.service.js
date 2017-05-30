"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var Subject_1 = require("rxjs/Subject");
var GeolocationService = (function () {
    function GeolocationService(zone) {
        this.zone = zone;
    }
    GeolocationService.prototype.watchLocation = function (options) {
        var _this = this;
        this.stopWatchingLocation();
        this.subject = new Subject_1.Subject();
        this.watchId = nativescript_geolocation_1.watchLocation(function (loc) {
            _this.zone.run(function () {
                _this.subject.next(loc);
            });
        }, function (e) {
            console.log("Error: " + e.message);
        }, options);
        return this.subject.asObservable();
    };
    GeolocationService.prototype.stopWatchingLocation = function () {
        if (this.watchId) {
            nativescript_geolocation_1.clearWatch(this.watchId);
        }
    };
    Object.defineProperty(GeolocationService.prototype, "geolocation$", {
        get: function () {
            return this.watchLocation({
                desiredAccuracy: enums_1.Accuracy.high,
                updateDistance: 0.1,
                minimumUpdateTime: 100
            });
        },
        enumerable: true,
        configurable: true
    });
    GeolocationService.prototype.getDistance$ = function (target) {
        return this.geolocation$
            .map(function (loc) { return ({
            location: loc,
            target: target,
            distance: Math.round(nativescript_geolocation_1.distance(loc, target))
        }); });
    };
    return GeolocationService;
}());
GeolocationService = __decorate([
    core_2.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], GeolocationService);
exports.GeolocationService = GeolocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdlb2xvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUM7QUFDckMsc0NBQXlDO0FBQ3pDLHFFQUF1RjtBQUN2RixrQ0FBa0M7QUFFbEMsd0NBQXFDO0FBR3JDLElBQWEsa0JBQWtCO0lBSzlCLDRCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUVoQyxDQUFDO0lBRUQsMENBQWEsR0FBYixVQUFjLE9BQU87UUFBckIsaUJBY0M7UUFiQSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsd0NBQWEsQ0FDM0IsVUFBQyxHQUFhO1lBQ2IsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLEVBQ0QsVUFBVSxDQUFDO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxPQUFPLENBQUMsQ0FBQztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxpREFBb0IsR0FBcEI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixxQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0YsQ0FBQztJQUVELHNCQUFJLDRDQUFZO2FBQWhCO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3pCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7Z0JBQzlCLGNBQWMsRUFBRSxHQUFHO2dCQUNuQixpQkFBaUIsRUFBRSxHQUFHO2FBQ3RCLENBQUMsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQseUNBQVksR0FBWixVQUFhLE1BQWdCO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWTthQUN0QixHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDO1lBQ2QsUUFBUSxFQUFFLEdBQUc7WUFDYixNQUFNLFFBQUE7WUFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQ0FBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQyxDQUFDLEVBSlksQ0FJWixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBL0NZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQU1jLGFBQU07R0FMcEIsa0JBQWtCLENBK0M5QjtBQS9DWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt3YXRjaExvY2F0aW9uLCBjbGVhcldhdGNoLCBMb2NhdGlvbiwgZGlzdGFuY2V9IGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XG5pbXBvcnQge0FjY3VyYWN5fSBmcm9tICd1aS9lbnVtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb25TZXJ2aWNlIHtcblx0cHJpdmF0ZSBzdWJqZWN0O1xuXHRwcml2YXRlIHdhdGNoSWQ7XG5cdHB1YmxpYyBwb3NpdGlvbiQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcblxuXHR9XG5cblx0d2F0Y2hMb2NhdGlvbihvcHRpb25zKSB7XG5cdFx0dGhpcy5zdG9wV2F0Y2hpbmdMb2NhdGlvbigpO1xuXHRcdHRoaXMuc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG5cdFx0dGhpcy53YXRjaElkID0gd2F0Y2hMb2NhdGlvbihcblx0XHRcdChsb2M6IExvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3ViamVjdC5uZXh0KGxvYyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcblx0XHRcdH0sXG5cdFx0XHRvcHRpb25zKTtcblx0XHRyZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0c3RvcFdhdGNoaW5nTG9jYXRpb24oKSB7XG5cdFx0aWYgKHRoaXMud2F0Y2hJZCkge1xuXHRcdFx0Y2xlYXJXYXRjaCh0aGlzLndhdGNoSWQpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBnZW9sb2NhdGlvbiQoKSB7XG5cdFx0cmV0dXJuIHRoaXMud2F0Y2hMb2NhdGlvbih7XG5cdFx0XHRkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXG5cdFx0XHR1cGRhdGVEaXN0YW5jZTogMC4xLFxuXHRcdFx0bWluaW11bVVwZGF0ZVRpbWU6IDEwMFxuXHRcdH0pO1xuXHR9XG5cblx0Z2V0RGlzdGFuY2UkKHRhcmdldDogTG9jYXRpb24pIHtcblx0XHRyZXR1cm4gdGhpcy5nZW9sb2NhdGlvbiRcblx0XHRcdC5tYXAoKGxvYykgPT4gKHtcblx0XHRcdFx0bG9jYXRpb246IGxvYyxcblx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRkaXN0YW5jZTogTWF0aC5yb3VuZChkaXN0YW5jZShsb2MsIHRhcmdldCkpXG5cdFx0XHR9KSk7XG5cdH1cbn0iXX0=