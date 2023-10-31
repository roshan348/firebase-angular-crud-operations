import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { FormsModule } from '@angular/forms';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAOGiHSsH8Wjqb8oAap30oucXY9RmljmMg',
      authDomain: 'student-management-syste-d24f8.firebaseapp.com',
      projectId: 'student-management-syste-d24f8',
      storageBucket: 'student-management-syste-d24f8.appspot.com',
      messagingSenderId: '788508634387',
      appId: '1:788508634387:web:a0049da732cef89899bee6',
    }),
    FormsModule,
    // AngularFirestore,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
