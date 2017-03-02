import { Injectable } from '@angular/core';

import { 
	Http,
	Response,
	Headers,
	RequestOptions
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
	public static starWarsApiEndpoint: string = 'http://swapi.co/api/people/';
	public static httpbinApiEndpoint: string = 'https://httpbin.org/';
	
	private headers: Headers = new Headers({
		'accept': 'application/json',
		'accept-language': 'fr-FR,en;q=0.8',
		'Authorization': 'Bearer mytoken123',
		'X-CUSTOM-HEADER': 'Custom header defined in Angular code'
	});
	private options: RequestOptions = new RequestOptions({headers: this.headers});
	private data: string = 'Lorem ipsum'; 

	constructor(private httpClient: Http) {}

	public fireGetRequest(): Observable<Object> {
		return this.httpClient.get(HttpService.starWarsApiEndpoint)
							  .map(this.extractData)
						      .catch(this.handleError);
	}

	public firePostRequest(): Observable<Object> {
		return this.httpClient.post(HttpService.httpbinApiEndpoint + 'post', this.data, this.options)
							  .map(this.extractData)
						      .catch(this.handleError);
	}

	public firePutRequest(): Observable<Object> {
		return this.httpClient.put(HttpService.httpbinApiEndpoint + 'put', this.data, this.options)
							  .map(this.extractData)
						      .catch(this.handleError);
	}

	public fireDeleteRequest(): Observable<Object> {
		return this.httpClient.delete(HttpService.httpbinApiEndpoint + 'delete', this.options)
							  .map(this.extractData)
						      .catch(this.handleError);
	}

	private extractData(response: Response): Object {
		return response.json() || {};
	}

	private handleError(response: Response | any) {
		console.log(response);
		return Observable.throw(response.toString());
	}
}