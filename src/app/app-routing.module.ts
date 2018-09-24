import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { LogoBoxComponent } from './logo-box/logo-box.component';

const appRoutes: Routes = [
  { path: '', component: LogoBoxComponent},
  { path: '404', component: ErrorNotFoundComponent},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
