"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var common_1 = require("@angular/common");
var step_routing_1 = require("./step.routing");
var step_service_1 = require("./step.service");
var StepModule = (function () {
    function StepModule() {
    }
    return StepModule;
}());
StepModule = __decorate([
    core_1.NgModule({
        declarations: step_routing_1.navigableComponents.slice(),
        imports: [
            common_1.CommonModule,
            nativescript_angular_1.NativeScriptRouterModule,
            step_routing_1.routing
        ],
        providers: [
            step_service_1.StepService
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], StepModule);
exports.StepModule = StepModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGVwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCw2REFBOEQ7QUFDOUQsMENBQTZDO0FBRTdDLCtDQUE0RDtBQUM1RCwrQ0FBMkM7QUFnQjNDLElBQWEsVUFBVTtJQUF2QjtJQUNBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksVUFBVTtJQWR0QixlQUFRLENBQUM7UUFDVCxZQUFZLEVBQ1Isa0NBQW1CLFFBQ3RCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IscUJBQVk7WUFDWiwrQ0FBd0I7WUFDeEIsc0JBQU87U0FDUDtRQUNELFNBQVMsRUFBRTtZQUNWLDBCQUFXO1NBQ1g7UUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUMzQixDQUFDO0dBQ1csVUFBVSxDQUN0QjtBQURZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge3JvdXRpbmcsIG5hdmlnYWJsZUNvbXBvbmVudHN9IGZyb20gJy4vc3RlcC5yb3V0aW5nJztcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL3N0ZXAuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5uYXZpZ2FibGVDb21wb25lbnRzXG5cdF0sXG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuXHRcdHJvdXRpbmdcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RlcFNlcnZpY2Vcblx0XSxcblx0c2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBNb2R1bGUge1xufVxuIl19