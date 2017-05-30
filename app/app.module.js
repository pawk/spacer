"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_angular_1 = require("nativescript-angular");
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
            nativescript_angular_1.NativeScriptRouterModule,
            app_routing_1.routing,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsc0VBQW1GO0FBRW5GLDBDQUE2QztBQUM3QyxnRkFBOEU7QUFFOUUsNkRBQThEO0FBQzlELDZDQUEyRDtBQUUzRCxvRUFBZ0U7QUFDaEUsd0RBQW9EO0FBQ3BELHFEQUFpRDtBQUVqRCx3REFBc0Q7QUFDdEQsc0RBQW9EO0FBQ3BELGtFQUFnRTtBQUNoRSxpREFBNkM7QUF5QjdDLElBQWEsU0FBUztJQUF0QjtJQUNBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksU0FBUztJQXZCckIsZUFBUSxDQUFDO1FBQ1QsWUFBWTtZQUNYLCtCQUFxQjtZQUNyQiw0QkFBWTtpQkFDVCxpQ0FBbUIsQ0FDdEI7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNSLHFCQUFZO1lBQ1osd0NBQWtCO1lBQ2xCLCtDQUF3QjtZQUN4QixxQkFBTztZQUNQLHdCQUFVO1lBQ1YsZ0NBQWM7WUFDZCxzQkFBUztTQUNUO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsOEJBQWE7WUFDYiw0QkFBWTtZQUNaLHdDQUFrQjtTQUNsQjtRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzNCLENBQUM7R0FDVyxTQUFTLENBQ3JCO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU0lERURSQVdFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7cm91dGluZywgbmF2aWdhYmxlQ29tcG9uZW50c30gZnJvbSAnLi9hcHAucm91dGluZyc7XG5cbmltcG9ydCB7U2V0dGluZ3NNb2R1bGV9IGZyb20gJy4vcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlJztcbmltcG9ydCB7U3RlcE1vZHVsZX0gZnJvbSAnLi9wYWdlcy9zdGVwL3N0ZXAubW9kdWxlJztcbmltcG9ydCB7TWFwTW9kdWxlfSBmcm9tICcuL3BhZ2VzL21hcC9tYXAubW9kdWxlJztcblxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29yZS9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VuZFNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc291bmQuc2VydmljZSc7XG5pbXBvcnQgeyBHZW9sb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvcmUvZ2VvbG9jYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTSURFRFJBV0VSX0RJUkVDVElWRVMsXG5cdFx0QXBwQ29tcG9uZW50LFxuXHRcdC4uLm5hdmlnYWJsZUNvbXBvbmVudHNcblx0XSxcblx0Ym9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuXHRcdHJvdXRpbmcsXG5cdFx0U3RlcE1vZHVsZSxcblx0XHRTZXR0aW5nc01vZHVsZSxcblx0XHRNYXBNb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Q29uZmlnU2VydmljZSxcblx0XHRTb3VuZFNlcnZpY2UsXG5cdFx0R2VvbG9jYXRpb25TZXJ2aWNlXG5cdF0sXG5cdHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19