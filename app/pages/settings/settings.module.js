"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var common_1 = require("@angular/common");
var settings_routing_1 = require("./settings.routing");
var settings_service_1 = require("./settings.service");
var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    core_1.NgModule({
        declarations: settings_routing_1.navigableComponents.slice(),
        imports: [
            common_1.CommonModule,
            nativescript_angular_1.NativeScriptRouterModule,
            settings_routing_1.routing
        ],
        providers: [
            settings_service_1.SettingsService
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], SettingsModule);
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDZEQUE4RDtBQUM5RCwwQ0FBNkM7QUFFN0MsdURBQWdFO0FBQ2hFLHVEQUFtRDtBQWdCbkQsSUFBYSxjQUFjO0lBQTNCO0lBQ0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxjQUFjO0lBZDFCLGVBQVEsQ0FBQztRQUNULFlBQVksRUFDUixzQ0FBbUIsUUFDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUixxQkFBWTtZQUNaLCtDQUF3QjtZQUN4QiwwQkFBTztTQUNQO1FBQ0QsU0FBUyxFQUFFO1lBQ1Ysa0NBQWU7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzNCLENBQUM7R0FDVyxjQUFjLENBQzFCO0FBRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7cm91dGluZywgbmF2aWdhYmxlQ29tcG9uZW50c30gZnJvbSAnLi9zZXR0aW5ncy5yb3V0aW5nJztcbmltcG9ydCB7U2V0dGluZ3NTZXJ2aWNlfSBmcm9tICcuL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5uYXZpZ2FibGVDb21wb25lbnRzXG5cdF0sXG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuXHRcdHJvdXRpbmdcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2V0dGluZ3NTZXJ2aWNlXG5cdF0sXG5cdHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc01vZHVsZSB7XG59XG4iXX0=