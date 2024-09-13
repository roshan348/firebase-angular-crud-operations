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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MainPageComponent } from './main-page/main-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// import { AngularFirestore } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyATfscRE3w6Ybi8K-5f7VLHugi9_x0vWmg',
      authDomain: 'crud-operation-53f92.firebaseapp.com',
      projectId: 'crud-operation-53f92',
      storageBucket: 'crud-operation-53f92.appspot.com',
      messagingSenderId: '871937597927',
      appId: '1:871937597927:web:07fef1b5bf096162d9dd42',
      measurementId: 'G-8KZ6SNK5J2',
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatIconModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    // AngularFirestore,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
