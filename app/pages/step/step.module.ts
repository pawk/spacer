import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular";
import {CommonModule} from '@angular/common';

import {routing, navigableComponents} from './step.routing';
import {StepService} from "./step.service";

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
		StepService
	],
	schemas: [NO_ERRORS_SCHEMA]
})
export class StepModule {
}
