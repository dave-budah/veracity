import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {tokenInterceptor} from "./interceptors/token.interceptor";
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideToastr} from "ngx-toastr";
import {NgxsModule} from "@ngxs/store";
import {httpInterceptor} from "./interceptors/http.interceptor";
import {BnNgIdleService} from "bn-ng-idle";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {DataService} from "./services/data.service";
import {delay} from "rxjs";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideStore(),
    provideStore(),
    provideEffects(),
    provideEffects(),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      progressBar: true,
      newestOnTop: true,
      closeButton: true,
      tapToDismiss: true,
    }),
    importProvidersFrom(NgxsModule.forRoot(), HttpClientInMemoryWebApiModule.forRoot(DataService, { delay: 100 }), BnNgIdleService),
]
};
