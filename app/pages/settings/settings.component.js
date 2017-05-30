"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var settings_service_1 = require("./settings.service");
var page_1 = require("ui/page");
var SettingsComponent = (function () {
    function SettingsComponent(router, settings, page) {
        this.router = router;
        this.settings = settings;
        this.page = page;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.page.actionBar.title = 'Ustawienia';
    };
    SettingsComponent.prototype.onGeoSwitchChange = function (val) {
        var _this = this;
        this.settings.geolocationEnabled = val;
        if (val && !nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest().catch(function () {
                _this.onGeoSwitchChange(false);
                alert('Musisz udzielić zgody na użycie przez nas usług lokalizacji - zrób to w ustawieniach swojego telefonu.');
            });
        }
    };
    SettingsComponent.prototype.onAdventureSwitchChange = function (val) {
        this.settings.adventureModeEnabled = val;
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-settings',
        templateUrl: './settings.component.html',
        styleUrls: ['./settings.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, settings_service_1.SettingsService, page_1.Page])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLDBDQUF5QztBQUN6QyxxRUFBb0g7QUFDcEgsdURBQW1EO0FBQ25ELGdDQUE2QjtBQVE3QixJQUFhLGlCQUFpQjtJQUM1QiwyQkFBb0IsTUFBYyxFQUFVLFFBQXlCLEVBQVUsSUFBVTtRQUFyRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUU5RixvQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUMxQyxDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLEdBQUc7UUFBckIsaUJBUUM7UUFQQSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQ0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLGdEQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyx3R0FBd0csQ0FBQyxDQUFBO1lBQ2hILENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUM7SUFFRCxtREFBdUIsR0FBdkIsVUFBd0IsR0FBRztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztJQUMxQyxDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7S0FDeEMsQ0FBQztxQ0FFNEIsZUFBTSxFQUFvQixrQ0FBZSxFQUFnQixXQUFJO0dBRDlFLGlCQUFpQixDQW9CN0I7QUFwQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhdGlvbiwgZ2V0Q3VycmVudExvY2F0aW9uLCBpc0VuYWJsZWQsIGRpc3RhbmNlLCBlbmFibGVMb2NhdGlvblJlcXVlc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQge1NldHRpbmdzU2VydmljZX0gZnJvbSAnLi9zZXR0aW5ncy5zZXJ2aWNlJztcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXNldHRpbmdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9ICdVc3Rhd2llbmlhJztcblx0fVxuXG5cdG9uR2VvU3dpdGNoQ2hhbmdlKHZhbCkge1xuXHRcdHRoaXMuc2V0dGluZ3MuZ2VvbG9jYXRpb25FbmFibGVkID0gdmFsO1xuXHRcdGlmICh2YWwgJiYgIWlzRW5hYmxlZCgpKSB7XG5cdFx0XHRlbmFibGVMb2NhdGlvblJlcXVlc3QoKS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMub25HZW9Td2l0Y2hDaGFuZ2UoZmFsc2UpO1xuXHRcdFx0XHRhbGVydCgnTXVzaXN6IHVkemllbGnEhyB6Z29keSBuYSB1xbx5Y2llIHByemV6IG5hcyB1c8WCdWcgbG9rYWxpemFjamkgLSB6csOzYiB0byB3IHVzdGF3aWVuaWFjaCBzd29qZWdvIHRlbGVmb251LicpXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRvbkFkdmVudHVyZVN3aXRjaENoYW5nZSh2YWwpIHtcblx0XHR0aGlzLnNldHRpbmdzLmFkdmVudHVyZU1vZGVFbmFibGVkID0gdmFsO1xuXHR9XG59XG4iXX0=