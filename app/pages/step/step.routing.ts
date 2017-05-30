import {ModuleWithProviders} from '@angular/core';
import {Routes} from '@angular/router';
import {NativeScriptRouterModule} from 'nativescript-angular';
import {StepComponent} from './step.component';
import {ListComponent} from './list/list.component';


export const ROUTES: Routes = [
	{path: 'step/list', component: ListComponent},
	{path: 'step/:id', component: StepComponent}
];

export const navigableComponents = [
	StepComponent,
	ListComponent
];

export const routing: ModuleWithProviders = NativeScriptRouterModule.forChild(ROUTES);
