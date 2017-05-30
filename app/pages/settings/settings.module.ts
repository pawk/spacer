import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular";
import {CommonModule} from '@angular/common';

import {routing, navigableComponents} from './settings.routing';
import {SettingsService} from './settings.service';

@NgModule({
	declarations: [
		...navigableComponents
	],
	imports: [
		CommonModule,
		NativeScriptRouterModule,
		routing
	],
	providers: [
		SettingsService
	],
	schemas: [NO_ERRORS_SCHEMA]
})
export class SettingsModule {
}
