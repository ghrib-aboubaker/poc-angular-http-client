import { Component } from '@angular/core';

import { HttpService } from './http.service';

@Component({
	selector: 'http-delete',
	template: `
	  <h1>DELETE Request</h1>
	  <h4>API endpoint {{staticHttpbinApiEndpoint()}} <button (click)="fireDeleteRequest()">GO</button></h4>
	  <pre *ngIf="response">{{response}}</pre>
	`,
	providers: [HttpService],
	styleUrls: ['common.component.css']
})
export class DeleteComponent {
	private response: string;
	private error: string;

	constructor(private httpService: HttpService) {}

	public staticHttpbinApiEndpoint() {
		return HttpService.httpbinApiEndpoint + 'delete';
	}

	public fireDeleteRequest() {
		this.httpService.fireDeleteRequest()
						.subscribe(
							response 	=> this.response 	= JSON.stringify(response, null, 2),
							error 		=> this.error		= error
						);
	}
}