import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeComponent } from './challenge.component';

describe('ChallengeComponent', () => {
	let component: ChallengeComponent;
	let fixture: ComponentFixture<ChallengeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChallengeComponent]
		})
		.compileComponents();

		fixture = TestBed.createComponent(ChallengeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
