import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          "projectId":"danotes-74fba",
          "appId":"1:1016865318693:web:65b489e6210636c7ea5ccc",
          "storageBucket":"danotes-74fba.firebasestorage.app",
          "apiKey":"AIzaSyAMVsZIbihPeCzY87Im0iLVmpvrcg-i7oE",
          "authDomain":"danotes-74fba.firebaseapp.com",
          "messagingSenderId":"1016865318693",
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
