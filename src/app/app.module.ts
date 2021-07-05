import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignAndLayoutComponent } from './components/design-and-layout/design-and-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { AnimationComponent } from './components/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignAndLayoutComponent,
    HomeComponent,
    ResponsiveComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
