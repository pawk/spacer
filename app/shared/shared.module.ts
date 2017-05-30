import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GoogleMapsComponent} from './google-maps.component';

const declaredExports = [
	GoogleMapsComponent
]

@NgModule({
	imports: [
		CommonModule
	],
	declarations: declaredExports,
	exports: declaredExports,
	// schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }