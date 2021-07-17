import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxAreaComponent } from './child_components/box-area/box-area.component';
import { BoxComponent } from './child_components/box/box.component';
import { TitleBarComponent } from './child_components/title-bar/title-bar.component';
import { LogAreaComponent } from './child_components/log-area/log-area.component';
import { LogElementComponent } from './child_components/log-element/log-element.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxAreaComponent,
    BoxComponent,
    TitleBarComponent,
    LogAreaComponent,
    LogElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
