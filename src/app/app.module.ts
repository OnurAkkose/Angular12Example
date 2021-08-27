import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { CoreInterceptor } from './core/interceptors/core.interceptor';
import { TicketService } from './core/services/ticket.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { TicketState } from './core/store/states/ticket.state';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AuthenticationState } from './core/store/states/user.state';
import { AuthService } from './core/services/auth.service';
import { AlertifyService } from './core/services/alertify.service';
import { AuthGuard } from './core/guards/auth.guard';
import { myRxStompConfig } from '../my-rx-stomp.config';
@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,  
    NgxsModule,
    HttpClientModule,
    NgxsModule.forRoot([TicketState, AuthenticationState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot()
  ],
  exports:[
  ],
  providers: [
    TicketService,
    AuthService,
    AuthGuard,
    AlertifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInterceptor,
      multi: true
    },
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
