import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { AddCompetitionComponent } from './pages/competition/add/competition/add.competition.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { GuardService } from './services/guards/guard.service';
import { LoginGuardService } from './services/guards/loginguard.service';
import { AddChallengeComponent } from './pages/competition/add/challenge/add.challenge.component';
import { AddUserComponent } from './pages/competition/add/user/add.user.component';
import { EditCompetitionComponent } from './pages/competition/edit/competition/edit.competition.component';
import { EditChallengeComponent } from './pages/competition/edit/challenge/edit.challenge.component';
import { EditUserComponent } from './pages/competition/edit/user/edit.user.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Accueil'
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [LoginGuardService],
		title: 'Equitrec - Connexion'
	},
	{
		path: 'users/:id',
		component: UsersComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Utilisateur'
	},
	{
		path: 'competition/:id',
		component: CompetitionComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Compétition'
	},
	{
		path: 'create/competition',
		component: AddCompetitionComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Ajouter une compétition'
	},
	{
		path: 'create/challenge/:id',
		component: AddChallengeComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Ajouter une épreuve'
	},
	{
		path: 'create/user/:id',
		component: AddUserComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Ajouter un utilisateur'
	},
	{
		path: 'edit/competition/:id',
		component: EditCompetitionComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Modifier une compétition'
	},
	{
		path: 'edit/challenge/:id',
		component: EditChallengeComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Modifier une épreuve'
	},
	{
		path: 'edit/user/:id',
		component: EditUserComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Modifier un utilisateur'
	}
];
