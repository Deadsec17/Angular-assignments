import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-warning-alert',
	template: `
		<div class="alert alert-warning" role="warning">
			<span>Warning! This is a warning text.</span>
		</div>
  	`
})
export class WarningAlertComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
