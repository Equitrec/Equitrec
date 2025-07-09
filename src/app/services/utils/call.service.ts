import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class CallService {
	constructor(private http: HttpClient) {}

	callApi(url: string, method: string, params: { [key: string]: any }): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		let body = new HttpParams();
		Object.keys(params).forEach(key => {
			body = body.set(key, params[key]);
		});

		if (method === "post")
			return this.http.post("http://localhost:3000/" + url, body, { headers });

		if (method === "put")
			return this.http.put("http://localhost:3000/" + url, body, { headers });

		if (method === "delete")
			return this.http.delete("http://localhost:3000/" + url, { headers, body });

		return this.http.get("http://localhost:3000/" + url, { headers, params: body });
	}
}
