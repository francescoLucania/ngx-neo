import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { IMediaQueriesParams, MEDIA_QUERY_CONFIG } from 'ngx-neo-ui';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors';
import { UserService } from './services/user/user.service';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { Test1Service } from './services/test/test1.service';
import { Test3Service } from './services/test/test3.service';
import { Test2Service } from './services/test/test2.service';

export function initializerFactory(userService: UserService) {
  console.log('run initializer');
  return () => userService.getUser().subscribe();
}

const mediaQueriesConfig: IMediaQueriesParams = {
  enable: {
    mq: true,
    mqDevice: false,
  },
  mqBreakpoints: [
    ['sm', 767], // max-width
    ['md', 768], // min-width
    ['lg', 1140], // min-width
  ],
};

function provideRouterStore() {
  return undefined;
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: MEDIA_QUERY_CONFIG,
      useValue: mediaQueriesConfig,
    },
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideAppInitializer(async () => initializerFactory(inject(UserService))),
    {
      provide: Test1Service,
      useClass: Test2Service,
    },
    provideClientHydration(),
    //ngrx
    provideStore(reducers),
    provideEffects([AppEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideZonelessChangeDetection(),
  ],
};
