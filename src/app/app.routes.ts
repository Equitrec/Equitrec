import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { AddComponent } from './pages/competition/add/add.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { GuardService } from './services/guards/guard.service';
import { LoginGuardService } from './services/guards/loginguard.service';

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
		path: 'create',
		component: AddComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Ajouter une compétition'
	},
	{
		path: 'competition/:id',
		component: CompetitionComponent,
		canActivate: [GuardService],
		title: 'Equitrec - Compétition'
	}
];
