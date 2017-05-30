import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";

import {CommonModule} from '@angular/common';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import {NativeScriptRouterModule} from "nativescript-angular";
import {routing, navigableComponents} from './app.routing';

import {SettingsModule} from './pages/settings/settings.module';
import {StepModule} from './pages/step/step.module';
import {MapModule} from './pages/map/map.module';

import { ConfigService } from './core/config.service';
import { SoundService } from './core/sound.service';
import { GeolocationService } from './core/geolocation.service';
import {AppComponent} from "./app.component";

@NgModule({
	declarations: [
		SIDEDRAWER_DIRECTIVES,
		AppComponent,
		...navigableComponents
	],
	bootstrap: [AppComponent],
	imports: [
		CommonModule,
		NativeScriptModule,
		NativeScriptRouterModule,
		routing,
		StepModule,
		SettingsModule,
		MapModule
	],
	providers: [
		ConfigService,
		SoundService,
		GeolocationService
	],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
