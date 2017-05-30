"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../../shared/shared.module");
var map_routing_1 = require("./map.routing");
var MapModule = (function () {
    function MapModule() {
    }
    return MapModule;
}());
MapModule = __decorate([
    core_1.NgModule({
        declarations: map_routing_1.navigableComponents.slice(),
        imports: [
            shared_module_1.SharedModule,
            map_routing_1.routing
        ]
    })
], MapModule);
exports.MapModule = MapModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUM7QUFFdkMsNERBQXdEO0FBQ3hELDZDQUEyRDtBQVczRCxJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUFUckIsZUFBUSxDQUFDO1FBQ1QsWUFBWSxFQUNSLGlDQUFtQixRQUN0QjtRQUNELE9BQU8sRUFBRTtZQUNSLDRCQUFZO1lBQ1oscUJBQU87U0FDUDtLQUNELENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHtuYXZpZ2FibGVDb21wb25lbnRzLCByb3V0aW5nfSBmcm9tICcuL21hcC5yb3V0aW5nJztcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4ubmF2aWdhYmxlQ29tcG9uZW50c1xuXHRdLFxuXHRpbXBvcnRzOiBbXG5cdFx0U2hhcmVkTW9kdWxlLFxuXHRcdHJvdXRpbmdcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBNYXBNb2R1bGUge30iXX0=