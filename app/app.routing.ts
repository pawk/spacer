import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular";
import { HomeComponent } from './pages/home/home.component';

export const ROUTES: Routes = [
	{ path: '', component: HomeComponent}
]

export const navigableComponents = [
	HomeComponent
]

export const routing: ModuleWithProviders = NativeScriptRouterModule.forRoot(ROUTES)
