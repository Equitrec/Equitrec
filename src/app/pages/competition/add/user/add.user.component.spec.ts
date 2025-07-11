import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add.user.component';

describe('AddCompetitionComponent', () => {
	let component: AddUserComponent;
	let fixture: ComponentFixture<AddUserComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AddUserComponent]
		})
		.compileComponents();

		fixture = TestBed.createComponent(AddUserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
