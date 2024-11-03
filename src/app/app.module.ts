import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { CardClientComponent } from './card-client/card-client.component';
import { AllProjectComponentComponent } from './all-project-component/all-project-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FullPageWrapperComponent } from './full-page-wrapper/full-page-wrapper.component';
// import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardProjectComponent,
    CardClientComponent,
    AllProjectComponentComponent,
    HomeComponentComponent,
    FullPageWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }