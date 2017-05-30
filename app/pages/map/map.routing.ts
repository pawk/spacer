import {ModuleWithProviders} from '@angular/core';
import {Routes} from '@angular/router';
import {NativeScriptRouterModule} from 'nativescript-angular';
import {MapComponent} from './map.component';

const ROUTES: Routes = [
	{path: 'map', component: MapComponent}
];

export const navigableComponents = [
	MapComponent
];

export const routing: ModuleWithProviders = NativeScriptRouterModule.forChild(ROUTES);
