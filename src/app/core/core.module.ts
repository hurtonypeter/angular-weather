import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, MainComponent],
  imports: [
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
