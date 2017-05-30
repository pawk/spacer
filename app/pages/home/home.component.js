"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var step_service_1 = require("../step/step.service");
var nativescript_angular_1 = require("nativescript-angular");
var HomeComponent = (function () {
    function HomeComponent(pageRoute, stepService) {
        this.pageRoute = pageRoute;
        this.stepService = stepService;
        this.hamburgerMenuIcon = String.fromCharCode(0xe903);
        nativescript_geolocation_1.enableLocationRequest().then(function () {
        });
        //this.stepService.unlock(this.stepService.getSteps()[0])
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute
            .forEach(function () { return _this.lastUnlockedStep = _this.stepService.getLastUnlocked(); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [nativescript_angular_1.PageRoute, step_service_1.StepService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxxRUFBb0g7QUFDcEgscURBQWlEO0FBQ2pELDZEQUErQztBQVEvQyxJQUFhLGFBQWE7SUFJeEIsdUJBQW9CLFNBQW9CLEVBQVUsV0FBd0I7UUFBdEQsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSG5FLHNCQUFpQixHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFJdkQsZ0RBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFFN0IsQ0FBQyxDQUFDLENBQUM7UUFFSCx5REFBeUQ7SUFDMUQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZBLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUMzQixPQUFPLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxFQUExRCxDQUEwRCxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNwQyxDQUFDO3FDQUsrQixnQ0FBUyxFQUF1QiwwQkFBVztHQUovRCxhQUFhLENBZ0J6QjtBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vc3RlcC9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFnZVJvdXRlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRwcml2YXRlIGhhbWJ1cmdlck1lbnVJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5MDMpO1xuXHRwcml2YXRlIGxhc3RVbmxvY2tlZFN0ZXA6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLCBwcml2YXRlIHN0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSkge1xuXHRcdGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oKCkgPT4ge1xuXG5cdFx0fSk7XG5cblx0XHQvL3RoaXMuc3RlcFNlcnZpY2UudW5sb2NrKHRoaXMuc3RlcFNlcnZpY2UuZ2V0U3RlcHMoKVswXSlcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG5cdFx0XHQuZm9yRWFjaCgoKSA9PiB0aGlzLmxhc3RVbmxvY2tlZFN0ZXAgPSB0aGlzLnN0ZXBTZXJ2aWNlLmdldExhc3RVbmxvY2tlZCgpKTtcblx0fVxufVxuIl19