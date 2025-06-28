import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QrcodeComponent } from '../../components/qrcode/qrcode.component';
import { UserService } from '../../services/users/user.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-users',
	imports: [RouterModule, QrcodeComponent],
	templateUrl: './users.component.html',
	styleUrl: './users.component.css'
})

export class UsersComponent {
	userInfos: any;

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		public location: Location
	) {
		this.userInfos = userService.getInfos(Number(this.route.snapshot.paramMap.get('id')));
	}
}
