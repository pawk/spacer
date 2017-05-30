"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./pages/home/home.component");
exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent }
];
exports.navigableComponents = [
    home_component_1.HomeComponent
];
//export const routing: ModuleWithProviders = NativeScriptRouterModule.forRoot(ROUTES)
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot(exports.ROUTES)
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], RoutingModule);
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBcUU7QUFDckUsOERBQTREO0FBRS9DLFFBQUEsTUFBTSxHQUFXO0lBQzdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztDQUNyQyxDQUFBO0FBRVksUUFBQSxtQkFBbUIsR0FBRztJQUNsQyw4QkFBYTtDQUNiLENBQUE7QUFFRCxzRkFBc0Y7QUFTdEYsSUFBYSxhQUFhO0lBQTFCO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxhQUFhO0lBTnpCLGVBQVEsQ0FBQztRQUNULE9BQU8sRUFBRTtZQUNSLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxjQUFNLENBQUM7U0FDeEM7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNuQyxDQUFDO0dBQ1csYUFBYSxDQUV6QjtBQUZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBST1VURVM6IFJvdXRlcyA9IFtcblx0eyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fVxuXVxuXG5leHBvcnQgY29uc3QgbmF2aWdhYmxlQ29tcG9uZW50cyA9IFtcblx0SG9tZUNvbXBvbmVudFxuXVxuXG4vL2V4cG9ydCBjb25zdCByb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoUk9VVEVTKVxuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChST1VURVMpXG5cdF0sXG5cdGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdNb2R1bGUge1xuXG59Il19