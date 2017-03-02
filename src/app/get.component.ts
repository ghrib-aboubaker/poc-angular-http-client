import { Component } from '@angular/core';

import { HttpService } from './http.service';

@Component({
	selector: 'http-get',
	template: `
	  <h1>GET Request</h1>
	  <h4>API endpoint {{staticStarWarsApiEndpoint()}} <button (click)="fireGetRequest()">GO</button></h4>
	  <pre *ngIf="response">{{response}}</pre>
	`,
	providers: [HttpService],
	styleUrls: ['common.component.css']
})
export class GetComponent {
	private response: string;
	private error: string;

	constructor(private httpService: HttpService) {}

	public staticStarWarsApiEndpoint() {
		return HttpService.starWarsApiEndpoint;
	}

	public fireGetRequest() {
		this.httpService.fireGetRequest()
						.subscribe(
							response 	=> this.response 	= JSON.stringify(response, null, 2),
							error 		=> this.error		= error
						);
	}
}