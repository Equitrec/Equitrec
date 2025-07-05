import { Component, Input } from '@angular/core';
import { FormatService } from '../../../../services/utils/format.service';

@Component({
	selector: 'tile-user',
	imports: [],
	templateUrl: './user.component.html',
	styleUrl: './user.component.css'
})

export class UserComponent {
	@Input() user: any;

	constructor(public formatService: FormatService) { }
}
