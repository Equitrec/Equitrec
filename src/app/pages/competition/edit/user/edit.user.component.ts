import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../../../services/users/user.service';

@Component({
	selector: 'app-edit-user',
	imports: [FormsModule, RouterModule],
	templateUrl: './edit.user.component.html'
})

export class EditUserComponent {
	userId: number = 0;

	constructor(
		public userService: UserService,
		private route: ActivatedRoute,
		public location: Location
	) {
		this.userId = Number(this.route.snapshot.paramMap.get('id'));

		let userInfo = this.userService.getInfos(this.userId);

		this.userService.username = userInfo.username;
		this.userService.role = userInfo.role;
	}
}
