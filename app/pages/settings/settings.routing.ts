import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular";
import { SettingsComponent } from './settings.component';

export const ROUTES: Routes = [
	{ path: 'settings', component: SettingsComponent}
];

export const navigableComponents = [
	SettingsComponent
];

export const routing: ModuleWithProviders = NativeScriptRouterModule.forChild(ROUTES);
