import { Component } from '@angular/core';

import { HttpService } from './http.service';

@Component({
	selector: 'http-post',
	template: `
	  <h1>POST Request</h1>
	  <h4>API endpoint {{staticHttpbinApiEndpoint()}} <button (click)="firePostRequest()">GO</button></h4>
	  <pre *ngIf="response">{{response}}</pre>
	`,
	providers: [HttpService],
	styleUrls: ['common.component.css']
})
export class PostComponent {
	private response: string;
	private error: string;

	constructor(private httpService: HttpService) {}

	public staticHttpbinApiEndpoint() {
		return HttpService.httpbinApiEndpoint + 'post';
	}

	public firePostRequest() {
		this.httpService.firePostRequest()
						.subscribe(
							response 	=> this.response 	= JSON.stringify(response, null, 2),
							error 		=> this.error		= error
						);
	}
}