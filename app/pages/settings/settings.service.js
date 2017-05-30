"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_service_1 = require("../../core/config.service");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var SettingsService = (function () {
    function SettingsService(config) {
        this.config = config;
    }
    Object.defineProperty(SettingsService.prototype, "geolocationEnabled", {
        get: function () {
            return this.config.get('service.geolocation.enabled') && nativescript_geolocation_1.isEnabled();
        },
        set: function (val) {
            this.config.set('service.geolocation.enabled', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "adventureModeEnabled", {
        get: function () {
            return this.config.get('app.adventureMode.enabled') && this.geolocationEnabled;
        },
        set: function (val) {
            this.config.set('app.adventureMode.enabled', val);
        },
        enumerable: true,
        configurable: true
    });
    return SettingsService;
}());
SettingsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], SettingsService);
exports.SettingsService = SettingsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsNERBQXdEO0FBQ3hELHFFQUFtRDtBQUduRCxJQUFhLGVBQWU7SUFDM0IseUJBQW9CLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFBRyxDQUFDO0lBRTdDLHNCQUFJLCtDQUFrQjthQUF0QjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLG9DQUFTLEVBQUUsQ0FBQztRQUN0RSxDQUFDO2FBRUQsVUFBdUIsR0FBRztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyRCxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGlEQUFvQjthQUF4QjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNoRixDQUFDO2FBRUQsVUFBeUIsR0FBRztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FKQTtJQUtGLHNCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBRWdCLDhCQUFhO0dBRDdCLGVBQWUsQ0FrQjNCO0FBbEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSAnLi4vLi4vY29yZS9jb25maWcuc2VydmljZSc7XG5pbXBvcnQge2lzRW5hYmxlZH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7fVxuXG5cdGdldCBnZW9sb2NhdGlvbkVuYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmdldCgnc2VydmljZS5nZW9sb2NhdGlvbi5lbmFibGVkJykgJiYgaXNFbmFibGVkKCk7XG5cdH1cblxuXHRzZXQgZ2VvbG9jYXRpb25FbmFibGVkKHZhbCkge1xuXHRcdHRoaXMuY29uZmlnLnNldCgnc2VydmljZS5nZW9sb2NhdGlvbi5lbmFibGVkJywgdmFsKTtcblx0fVxuXG5cdGdldCBhZHZlbnR1cmVNb2RlRW5hYmxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZ2V0KCdhcHAuYWR2ZW50dXJlTW9kZS5lbmFibGVkJykgJiYgdGhpcy5nZW9sb2NhdGlvbkVuYWJsZWQ7XG5cdH1cblxuXHRzZXQgYWR2ZW50dXJlTW9kZUVuYWJsZWQodmFsKSB7XG5cdFx0dGhpcy5jb25maWcuc2V0KCdhcHAuYWR2ZW50dXJlTW9kZS5lbmFibGVkJywgdmFsKTtcblx0fVxufSJdfQ==