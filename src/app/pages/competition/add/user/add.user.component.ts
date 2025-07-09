import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../../../services/users/user.service';

@Component({
	selector: 'app-create-user',
	imports: [FormsModule, RouterModule],
	templateUrl: './add.user.component.html'
})

export class AddUserComponent {
	competitionId: number = 0;

	constructor(
		public userService: UserService,
		private route: ActivatedRoute,
		public location: Location
	) {
		this.competitionId = Number(this.route.snapshot.paramMap.get('id'));

		this.userService.username = '';
		this.userService.role = 1;
	}
}
