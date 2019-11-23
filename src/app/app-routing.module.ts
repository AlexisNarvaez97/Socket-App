import { UsuarioGuard } from './guards/usuario-guard.service';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'mensajes',
    component: MensajesComponent,
    canActivate: [UsuarioGuard]
  },
  {
    path: '**',
    component: LoginComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
