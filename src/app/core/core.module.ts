import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { CitiesService } from './services/cities.service';
import { WeatherApiClientService } from './clients/weather-api-client.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [LoginComponent, MainComponent],
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  providers: [
    AuthService,
    CitiesService,
    WeatherApiClientService,
    AuthGuard
  ]
})
export class CoreModule { }
