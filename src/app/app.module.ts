import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {ArraySortPipe} from './shared/sortBy.pipe';
import { LeftComponent } from './left/left.component';
import {SearchPipe} from './shared/filterBy.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RightComponent } from './right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ArraySortPipe, SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
