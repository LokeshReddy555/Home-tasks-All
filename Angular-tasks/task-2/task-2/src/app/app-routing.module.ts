import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveUsersComponent } from './active/active-users/active-users.component';
import { DeletedUsersComponent } from './deleted/deleted-users/deleted-users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'active', component: ActiveUsersComponent },
  { path: 'deleted', component: DeletedUsersComponent },
  {
    path: 'manage',
    loadChildren: () => import('./manage/manage.module').then((m) => m.ManageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }