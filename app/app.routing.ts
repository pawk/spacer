import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {NativeScriptRouterModule} from "nativescript-angular/router";
import { HomeComponent } from './pages/home/home.component';

export const ROUTES: Routes = [
	{ path: '', component: HomeComponent}
]

export const navigableComponents = [
	HomeComponent
]

//export const routing: ModuleWithProviders = NativeScriptRouterModule.forRoot(ROUTES)


@NgModule({
	imports: [
		NativeScriptRouterModule.forRoot(ROUTES)
	],
	exports: [NativeScriptRouterModule]
})
export class RoutingModule {

}