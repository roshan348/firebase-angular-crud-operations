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
      apiKey: 'AIzaSyDh33CWq5iJ5dZI32_X0-YMrGCrV_OXoVg',
      authDomain: 'crud-operation-6b84d.firebaseapp.com',
      projectId: 'crud-operation-6b84d',
      storageBucket: 'crud-operation-6b84d.appspot.com',
      messagingSenderId: '40013498123',
      appId: '1:40013498123:web:c7cfe6d51b8679a3ecc40e',
    }),
    FormsModule,
    // AngularFirestore,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
