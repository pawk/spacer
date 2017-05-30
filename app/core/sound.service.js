"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SoundService = (function () {
    function SoundService() {
    }
    SoundService.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    SoundService.prototype.play = function (path) {
        this.strategy.play(path);
    };
    SoundService.prototype.pause = function () {
        this.strategy.pause();
    };
    SoundService.prototype.dispose = function () {
        if (this.strategy.isDisposable) {
            this.strategy.dispose();
        }
    };
    SoundService.prototype.reset = function () {
        this.strategy.reset();
    };
    SoundService.prototype.replay = function () {
        this.strategy.replay();
    };
    return SoundService;
}());
SoundService = __decorate([
    core_1.Injectable()
], SoundService);
exports.SoundService = SoundService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291bmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvdW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0MsSUFBYSxZQUFZO0lBQXpCO0lBOEJBLENBQUM7SUExQkEsa0NBQVcsR0FBWCxVQUFZLFFBQXdCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssSUFBSTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDRixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QlksWUFBWTtJQUR4QixpQkFBVSxFQUFFO0dBQ0EsWUFBWSxDQThCeEI7QUE5Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xuaW1wb3J0IHtQbGF5ZXJTdHJhdGVneX0gZnJvbSBcIi4uL2NvcmUvc291bmQvcGxheWVyLXN0cmF0ZWd5XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VuZFNlcnZpY2Uge1xuXHRwcml2YXRlIGF1ZGlvMjogYW55O1xuXHRwcml2YXRlIHN0cmF0ZWd5OiBQbGF5ZXJTdHJhdGVneTtcblxuXHRzZXRTdHJhdGVneShzdHJhdGVneTogUGxheWVyU3RyYXRlZ3kpIHtcblx0XHR0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG5cdH1cblxuXHRwbGF5KHBhdGgpIHtcblx0XHR0aGlzLnN0cmF0ZWd5LnBsYXkocGF0aCk7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHR0aGlzLnN0cmF0ZWd5LnBhdXNlKCk7XG5cdH1cblxuXHRkaXNwb3NlKCkge1xuXHRcdGlmICh0aGlzLnN0cmF0ZWd5LmlzRGlzcG9zYWJsZSkge1xuXHRcdFx0dGhpcy5zdHJhdGVneS5kaXNwb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0cmVzZXQoKSB7XG5cdFx0dGhpcy5zdHJhdGVneS5yZXNldCgpO1xuXHR9XG5cblx0cmVwbGF5KCkge1xuXHRcdHRoaXMuc3RyYXRlZ3kucmVwbGF5KCk7XG5cdH1cblxufVxuIl19