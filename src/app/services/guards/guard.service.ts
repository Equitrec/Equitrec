import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../users/user.service';

@Injectable({
	providedIn: 'root'
})

export class GuardService implements CanActivate {
	constructor(private userService: UserService, private router: Router) {}

	canActivate(): boolean {
		if (this.userService.checkToken()) {
			return true;
		} else {
			this.router.navigate(['/login']);

			return false;
		}
	}
}
