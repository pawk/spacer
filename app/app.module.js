"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var settings_module_1 = require("./pages/settings/settings.module");
var step_module_1 = require("./pages/step/step.module");
var map_module_1 = require("./pages/map/map.module");
var config_service_1 = require("./core/config.service");
var sound_service_1 = require("./core/sound.service");
var geolocation_service_1 = require("./core/geolocation.service");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            angular_1.SIDEDRAWER_DIRECTIVES,
            app_component_1.AppComponent
        ].concat(app_routing_1.navigableComponents),
        bootstrap: [app_component_1.AppComponent],
        imports: [
            common_1.CommonModule,
            nativescript_module_1.NativeScriptModule,
            app_routing_1.RoutingModule,
            step_module_1.StepModule,
            settings_module_1.SettingsModule,
            map_module_1.MapModule
        ],
        providers: [
            config_service_1.ConfigService,
            sound_service_1.SoundService,
            geolocation_service_1.GeolocationService
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsc0VBQW1GO0FBRW5GLDBDQUE2QztBQUM3QyxnRkFBOEU7QUFHOUUsNkNBQWtFO0FBRWxFLG9FQUFnRTtBQUNoRSx3REFBb0Q7QUFDcEQscURBQWlEO0FBRWpELHdEQUFzRDtBQUN0RCxzREFBb0Q7QUFDcEQsa0VBQWdFO0FBQ2hFLGlEQUE2QztBQXdCN0MsSUFBYSxTQUFTO0lBQXRCO0lBQ0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxTQUFTO0lBdEJyQixlQUFRLENBQUM7UUFDVCxZQUFZO1lBQ1gsK0JBQXFCO1lBQ3JCLDRCQUFZO2lCQUNULGlDQUFtQixDQUN0QjtRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsT0FBTyxFQUFFO1lBQ1IscUJBQVk7WUFDWix3Q0FBa0I7WUFDbEIsMkJBQWE7WUFDYix3QkFBVTtZQUNWLGdDQUFjO1lBQ2Qsc0JBQVM7U0FDVDtRQUNELFNBQVMsRUFBRTtZQUNWLDhCQUFhO1lBQ2IsNEJBQVk7WUFDWix3Q0FBa0I7U0FDbEI7UUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUMzQixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNJREVEUkFXRVJfRElSRUNUSVZFUyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGluZ01vZHVsZSwgbmF2aWdhYmxlQ29tcG9uZW50c30gZnJvbSAnLi9hcHAucm91dGluZyc7XG5cbmltcG9ydCB7U2V0dGluZ3NNb2R1bGV9IGZyb20gJy4vcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlJztcbmltcG9ydCB7U3RlcE1vZHVsZX0gZnJvbSAnLi9wYWdlcy9zdGVwL3N0ZXAubW9kdWxlJztcbmltcG9ydCB7TWFwTW9kdWxlfSBmcm9tICcuL3BhZ2VzL21hcC9tYXAubW9kdWxlJztcblxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29yZS9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VuZFNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc291bmQuc2VydmljZSc7XG5pbXBvcnQgeyBHZW9sb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvcmUvZ2VvbG9jYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTSURFRFJBV0VSX0RJUkVDVElWRVMsXG5cdFx0QXBwQ29tcG9uZW50LFxuXHRcdC4uLm5hdmlnYWJsZUNvbXBvbmVudHNcblx0XSxcblx0Ym9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRNb2R1bGUsXG5cdFx0Um91dGluZ01vZHVsZSxcblx0XHRTdGVwTW9kdWxlLFxuXHRcdFNldHRpbmdzTW9kdWxlLFxuXHRcdE1hcE1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRDb25maWdTZXJ2aWNlLFxuXHRcdFNvdW5kU2VydmljZSxcblx0XHRHZW9sb2NhdGlvblNlcnZpY2Vcblx0XSxcblx0c2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=