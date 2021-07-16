import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleApareilComponent } from './single-apareil/single-apareil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';

      const appRoutes: Routes = [
        { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
        { path: 'auth', component: AuthComponent },
        { path: '', component: AppareilViewComponent },
        { path: 'appareils/:id',canActivate: [AuthGuard], component: SingleApareilComponent },
        { path: 'not-found', component: NotFoundComponent },
        { path: '**', redirectTo: 'not-found' }
      ];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
