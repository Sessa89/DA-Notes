import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-74fba","appId":"1:1016865318693:web:65b489e6210636c7ea5ccc","storageBucket":"danotes-74fba.firebasestorage.app","apiKey":"AIzaSyAMVsZIbihPeCzY87Im0iLVmpvrcg-i7oE","authDomain":"danotes-74fba.firebaseapp.com","messagingSenderId":"1016865318693"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideAppCheck(() => {
  // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
  const provider = new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key */);
  return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
})), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFunctions(() => getFunctions())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(providePerformance(() => getPerformance())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideRemoteConfig(() => getRemoteConfig())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-74fba","appId":"1:1016865318693:web:65b489e6210636c7ea5ccc","storageBucket":"danotes-74fba.firebasestorage.app","apiKey":"AIzaSyAMVsZIbihPeCzY87Im0iLVmpvrcg-i7oE","authDomain":"danotes-74fba.firebaseapp.com","messagingSenderId":"1016865318693"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
