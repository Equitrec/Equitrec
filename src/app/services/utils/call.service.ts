import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class CallService {
	constructor(private http: HttpClient) {}

	callApi(url: string, params: { [key: string]: string }): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		let body = new HttpParams();
		Object.keys(params).forEach(key => {
			body = body.set(key, params[key]);
		});

		return this.http.post("http://localhost:3000/" + url, body, { headers });
	}
}
