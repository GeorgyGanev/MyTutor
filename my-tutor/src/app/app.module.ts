import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { TutorModule } from './tutor/tutor.module';
import { UserModule } from './user/user.module';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    TutorModule,
    UserModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
