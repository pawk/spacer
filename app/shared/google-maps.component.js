"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var application = require("application");
var mapsModule = require("nativescript-google-maps-sdk");
var MapView = mapsModule.MapView;
element_registry_1.registerElement("MapView", function () { return MapView; });
if (application.ios) {
    GMSServices.provideAPIKey("AIzaSyBa4u8RqmRlpmI7ue-8UB1GWpY7Ub3Fe-c");
}
var GoogleMapsComponent = (function () {
    function GoogleMapsComponent() {
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
        this.map = this.mapView.nativeElement;
    };
    GoogleMapsComponent.prototype.onMapReady = function (event) {
        console.log("Map Ready");
        this.updateMap();
    };
    ;
    GoogleMapsComponent.prototype.updateMap = function () {
        var map = this.mapView.nativeElement;
        this.centerMap(map, this.markers[0].position);
        this.setMarkers(map, this.markers);
    };
    GoogleMapsComponent.prototype.setMarkers = function (map, markers) {
        markers.forEach(function (m) {
            var marker = new mapsModule.Marker();
            Object.assign(marker, m);
            marker.position = mapsModule.Position.positionFromLatLng(m.position.latitude, m.position.longitude);
            map.addMarker(marker);
        });
    };
    GoogleMapsComponent.prototype.centerMap = function (map, point) {
        map.latitude = point.latitude;
        map.longitude = point.longitude;
        map.zoom = 14;
    };
    return GoogleMapsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], GoogleMapsComponent.prototype, "onMarkerInfoWindowTapped", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GoogleMapsComponent.prototype, "markers", void 0);
__decorate([
    core_1.ViewChild('map'),
    __metadata("design:type", core_1.ElementRef)
], GoogleMapsComponent.prototype, "mapView", void 0);
GoogleMapsComponent = __decorate([
    core_1.Component({
        selector: 'trach-google-maps',
        template: "\n    <MapView #map \n\t\t\t(mapReady)=\"onMapReady($event)\"\n\t\t\t(markerInfoWindowTapped)=\"this.onMarkerInfoWindowTapped($event)\"></MapView>\n    "
    }),
    __metadata("design:paramtypes", [])
], GoogleMapsComponent);
exports.GoogleMapsComponent = GoogleMapsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ29vZ2xlLW1hcHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThFO0FBQzlFLDBFQUFzRTtBQUN0RSx5Q0FBNEM7QUFDNUMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztBQUdqQyxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsT0FBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0FBSTFDLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLFdBQVcsQ0FBQyxhQUFhLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBVUQsSUFBYSxtQkFBbUI7SUFNL0I7SUFBZSxDQUFDO0lBRWhCLHNDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsS0FBSztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFBQSxDQUFDO0lBRUYsdUNBQVMsR0FBVDtRQUNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsR0FBRyxFQUFFLE9BQU87UUFDdEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUN2RCxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFDbkIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3BCLENBQUM7WUFDRixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxHQUFHLEVBQUUsS0FBSztRQUNuQixHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDOUIsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNGLDBCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXZDUztJQUFSLFlBQUssRUFBRTs7cUVBQTRDO0FBQzNDO0lBQVIsWUFBSyxFQUFFOztvREFBYztBQUNKO0lBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDOzhCQUFVLGlCQUFVO29EQUFDO0FBSDFCLG1CQUFtQjtJQVIvQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsMEpBSU47S0FDSixDQUFDOztHQUNXLG1CQUFtQixDQXdDL0I7QUF4Q1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoJ2FwcGxpY2F0aW9uJyk7XG5sZXQgbWFwc01vZHVsZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCIpO1xubGV0IE1hcFZpZXcgPSBtYXBzTW9kdWxlLk1hcFZpZXc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBWaWV3XCIsICgpID0+IE1hcFZpZXcpO1xuXG5kZWNsYXJlIHZhciBHTVNTZXJ2aWNlcztcblxuaWYoYXBwbGljYXRpb24uaW9zKSB7XG5cdEdNU1NlcnZpY2VzLnByb3ZpZGVBUElLZXkoXCJBSXphU3lCYTR1OFJxbVJscG1JN3VlLThVQjFHV3BZN1ViM0ZlLWNcIik7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3RyYWNoLWdvb2dsZS1tYXBzJyxcblx0dGVtcGxhdGU6IGBcbiAgICA8TWFwVmlldyAjbWFwIFxuXHRcdFx0KG1hcFJlYWR5KT1cIm9uTWFwUmVhZHkoJGV2ZW50KVwiXG5cdFx0XHQobWFya2VySW5mb1dpbmRvd1RhcHBlZCk9XCJ0aGlzLm9uTWFya2VySW5mb1dpbmRvd1RhcHBlZCgkZXZlbnQpXCI+PC9NYXBWaWV3PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIG9uTWFya2VySW5mb1dpbmRvd1RhcHBlZDogKCRldmVudCkgPT4gdm9pZDtcblx0QElucHV0KCkgbWFya2VyczogYW55O1xuXHRAVmlld0NoaWxkKCdtYXAnKSBtYXBWaWV3OiBFbGVtZW50UmVmO1xuXHRwcml2YXRlIG1hcDtcblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5tYXAgPSB0aGlzLm1hcFZpZXcubmF0aXZlRWxlbWVudDtcblx0fVxuXG5cdG9uTWFwUmVhZHkoZXZlbnQpIHtcblx0XHRjb25zb2xlLmxvZyhcIk1hcCBSZWFkeVwiKTtcblx0XHR0aGlzLnVwZGF0ZU1hcCgpO1xuXHR9O1xuXG5cdHVwZGF0ZU1hcCgpIHtcblx0XHRsZXQgbWFwID0gdGhpcy5tYXBWaWV3Lm5hdGl2ZUVsZW1lbnQ7XG5cdFx0dGhpcy5jZW50ZXJNYXAobWFwLCB0aGlzLm1hcmtlcnNbMF0ucG9zaXRpb24pO1xuXHRcdHRoaXMuc2V0TWFya2VycyhtYXAsIHRoaXMubWFya2Vycyk7XG5cdH1cblxuXHRzZXRNYXJrZXJzKG1hcCwgbWFya2Vycykge1xuXHRcdG1hcmtlcnMuZm9yRWFjaChtID0+IHtcblx0XHRcdGxldCBtYXJrZXIgPSBuZXcgbWFwc01vZHVsZS5NYXJrZXIoKTtcblx0XHRcdE9iamVjdC5hc3NpZ24obWFya2VyLCBtKTtcblx0XHRcdG1hcmtlci5wb3NpdGlvbiA9IG1hcHNNb2R1bGUuUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKFxuXHRcdFx0XHRtLnBvc2l0aW9uLmxhdGl0dWRlLFxuXHRcdFx0XHRtLnBvc2l0aW9uLmxvbmdpdHVkZVxuXHRcdFx0KTtcblx0XHRcdG1hcC5hZGRNYXJrZXIobWFya2VyKTtcblx0XHR9KTtcblx0fVxuXG5cdGNlbnRlck1hcChtYXAsIHBvaW50KSB7XG5cdFx0bWFwLmxhdGl0dWRlID0gcG9pbnQubGF0aXR1ZGU7XG5cdFx0bWFwLmxvbmdpdHVkZSA9IHBvaW50LmxvbmdpdHVkZTtcblx0XHRtYXAuem9vbSA9IDE0O1xuXHR9XG59Il19