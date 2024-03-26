// TODO: после настройки ngrx будет удален

// import { NgModule, isDevMode, APP_INITIALIZER } from '@angular/core';
// import {
//   BrowserModule,
//   provideClientHydration,
// } from '@angular/platform-browser';
//
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { EffectsModule } from '@ngrx/effects';
// import { AppEffects } from './app.effects';
// import {
//   ButtonModule,
//   HeaderModule,
//   FooterModule,
//   IMediaQueriesParams,
//   MEDIA_QUERY_CONFIG,
//   ModalModule,
// } from 'ngx-neo-ui'; // from '@lib/ngx-neo-ui'
// import { CounterComponent } from './views/counter/views/counter/counter.component';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import {
//   provideRouter,
//   withEnabledBlockingInitialNavigation,
// } from '@angular/router';
// import { appRoutes } from './app.routes';
// import { UserService } from './services/user/user.service';
// import { authInterceptor } from './interceptors';
//
// export function initializerFactory(userService: UserService) {
//   console.log('run initializer');
//   return () => userService.getUser().subscribe();
// }
//
// const mediaQueriesConfig: IMediaQueriesParams = {
//   enable: {
//     mq: true,
//     mqDevice: false,
//   },
//   mqBreakpoints: [
//     ['sm', 767], // max-width
//     ['md', 768], // min-width
//     ['lg', 1140], // min-width
//   ],
// };
//
// @NgModule({
//   declarations: [CounterComponent],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     StoreModule.forRoot(reducers, {
//       metaReducers,
//     }),
//     StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
//     EffectsModule.forRoot([AppEffects]),
//     HeaderModule,
//     FooterModule,
//     ModalModule,
//     ButtonModule,
//   ],
//   providers: [
//     {
//       provide: MEDIA_QUERY_CONFIG,
//       useValue: mediaQueriesConfig,
//     },
//     provideHttpClient(withInterceptors([authInterceptor])),
//     provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
//     provideHttpClient(),
//     {
//       provide: APP_INITIALIZER,
//       useFactory: initializerFactory,
//       deps: [UserService],
//       multi: true,
//     },
//     provideClientHydration(),
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
