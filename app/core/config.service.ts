import {Injectable} from '@angular/core';
let _ = require('lodash');

@Injectable()
export class ConfigService {
	private registry: any = {
		service: {
			geolocation: {
				enabled: true
			}
		},
		app: {
			adventureMode: {
				enabled: true
			}
		}
	};

	set(key: string, val: any) {
		_.set(this.registry, key, val)
	}

	get(key: string): any {
		return _.get(this.registry, key)
	}
}