import { Component } from '@angular/core';

import { HttpService } from './http.service';

@Component({
	selector: 'http-put',
	template: `
	  <h1>PUT Request</h1>
	  <h4>API endpoint {{staticHttpbinApiEndpoint()}} <button (click)="firePutRequest()">GO</button></h4>
	  <pre *ngIf="response">{{response}}</pre>
	`,
	providers: [HttpService],
	styleUrls: ['common.component.css']
})
export class PutComponent {
	private response: string;
	private error: string;

	constructor(private httpService: HttpService) {}

	public staticHttpbinApiEndpoint() {
		return HttpService.httpbinApiEndpoint + 'put';
	}

	public firePutRequest() {
		this.httpService.firePutRequest()
						.subscribe(
							response 	=> this.response 	= JSON.stringify(response, null, 2),
							error 		=> this.error		= error
						);
	}
}