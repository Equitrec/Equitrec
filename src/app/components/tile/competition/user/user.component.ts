import { Component, Input } from '@angular/core';
import { FormatService } from '../../../../services/utils/format.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../../services/users/user.service';

@Component({
	selector: 'tile-user',
	imports: [NgIf, RouterModule],
	templateUrl: './user.component.html',
	styleUrl: './user.component.css'
})

export class UserComponent {
	@Input() user: any;

	constructor(public formatService: FormatService, public userService: UserService) { }
}
