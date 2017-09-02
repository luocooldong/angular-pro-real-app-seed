import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party module
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared module
import { SharedModule } from './shared/shared.module';



export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }

        ]
    }
];


export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBPKS_J5iZyH0Otg5QkvQDbh7xYq00HXfU",
    authDomain: "fitness-app-1e09e.firebaseapp.com",
    databaseURL: "https://fitness-app-1e09e.firebaseio.com",
    projectId: "fitness-app-1e09e",
    storageBucket: "fitness-app-1e09e.appspot.com",
    messagingSenderId: "632595377612"
};



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot() 
    ]
})
export class AuthModule {}