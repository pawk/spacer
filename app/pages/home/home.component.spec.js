"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var home_component_1 = require("./home.component");
describe('HomeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [home_component_1.HomeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpREFBeUU7QUFJekUsbURBQWlEO0FBRWpELFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFDeEIsSUFBSSxTQUF3QixDQUFDO0lBQzdCLElBQUksT0FBd0MsQ0FBQztJQUU3QyxVQUFVLENBQUMsZUFBSyxDQUFDO1FBQ2YsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixZQUFZLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO1NBQ2hDLENBQUM7YUFDRCxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixVQUFVLENBQUM7UUFDVCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsOEJBQWEsQ0FBQyxDQUFDO1FBQ2pELFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUNsQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSAqL1xuaW1wb3J0IHsgYXN5bmMsIENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQnkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERlYnVnRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCdIb21lQ29tcG9uZW50JywgKCkgPT4ge1xuICBsZXQgY29tcG9uZW50OiBIb21lQ29tcG9uZW50O1xuICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxIb21lQ29tcG9uZW50PjtcblxuICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbIEhvbWVDb21wb25lbnQgXVxuICAgIH0pXG4gICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gIH0pKTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoSG9tZUNvbXBvbmVudCk7XG4gICAgY29tcG9uZW50ID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBjcmVhdGUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGNvbXBvbmVudCkudG9CZVRydXRoeSgpO1xuICB9KTtcbn0pO1xuIl19