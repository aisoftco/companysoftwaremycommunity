import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
<<<<<<< HEAD
=======
import { PortfolioComponent } from './portfolio/portfolio.component';
>>>>>>> 257bf91284eb77cb228da626359c263efe60ffaf

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ServiceComponent
=======
    ServiceComponent,
    PortfolioComponent
>>>>>>> 257bf91284eb77cb228da626359c263efe60ffaf
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
