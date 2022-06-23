import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgSwitchComponent,
    NavbarComponent,
    PageHeaderComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
