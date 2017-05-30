"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require('lodash');
var ConfigService = (function () {
    function ConfigService() {
        this.registry = {
            service: {
                geolocation: {
                    enabled: true
                }
            },
            app: {
                adventureMode: {
                    enabled: true
                }
            }
        };
    }
    ConfigService.prototype.set = function (key, val) {
        _.set(this.registry, key, val);
    };
    ConfigService.prototype.get = function (key) {
        return _.get(this.registry, key);
    };
    return ConfigService;
}());
ConfigService = __decorate([
    core_1.Injectable()
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFHMUIsSUFBYSxhQUFhO0lBRDFCO1FBRVMsYUFBUSxHQUFRO1lBQ3ZCLE9BQU8sRUFBRTtnQkFDUixXQUFXLEVBQUU7b0JBQ1osT0FBTyxFQUFFLElBQUk7aUJBQ2I7YUFDRDtZQUNELEdBQUcsRUFBRTtnQkFDSixhQUFhLEVBQUU7b0JBQ2QsT0FBTyxFQUFFLElBQUk7aUJBQ2I7YUFDRDtTQUNELENBQUM7SUFTSCxDQUFDO0lBUEEsMkJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxHQUFRO1FBQ3hCLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELDJCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ2QsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtHQUNBLGFBQWEsQ0FxQnpCO0FBckJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmxldCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcblx0cHJpdmF0ZSByZWdpc3RyeTogYW55ID0ge1xuXHRcdHNlcnZpY2U6IHtcblx0XHRcdGdlb2xvY2F0aW9uOiB7XG5cdFx0XHRcdGVuYWJsZWQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcDoge1xuXHRcdFx0YWR2ZW50dXJlTW9kZToge1xuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHNldChrZXk6IHN0cmluZywgdmFsOiBhbnkpIHtcblx0XHRfLnNldCh0aGlzLnJlZ2lzdHJ5LCBrZXksIHZhbClcblx0fVxuXG5cdGdldChrZXk6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIF8uZ2V0KHRoaXMucmVnaXN0cnksIGtleSlcblx0fVxufSJdfQ==