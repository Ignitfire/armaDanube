import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideClientHydration} from '@angular/platform-browser';

import {provideHttpClient} from '@angular/common/http';

import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideClientHydration(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideRouter(routes),
  ]
};
