import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChallengeComponent } from './edit.challenge.component';

describe('EditCompetitionComponent', () => {
	let component: EditChallengeComponent;
	let fixture: ComponentFixture<EditChallengeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EditChallengeComponent]
		})
		.compileComponents();

		fixture = TestBed.createComponent(EditChallengeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
