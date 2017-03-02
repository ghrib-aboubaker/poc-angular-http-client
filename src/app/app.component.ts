import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<http-get></http-get>
	<http-post></http-post>
	<http-put></http-put>
	<http-delete></http-delete>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent { }
