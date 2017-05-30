import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {StepService} from '../step.service';

@Component({
	moduleId: module.id,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	private list;

  constructor(private stepService: StepService) {
	}

	ngOnInit() {

		this.list = this.stepService.getAllVisited();
		console.log(JSON.stringify(this.list, null, 2))
	}
}
