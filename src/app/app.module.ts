import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModuloBModule} from '../app/modulo-b/modulo-b.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
