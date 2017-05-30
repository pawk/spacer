import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {navigableComponents, routing} from './map.routing';

@NgModule({
	declarations: [
		...navigableComponents
	],
	imports: [
		SharedModule,
		routing
	]
})
export class MapModule {}