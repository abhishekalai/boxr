import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxAreaComponent } from './child_components/box-area/box-area.component';
import { TitleBarComponent } from './child_components/title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxAreaComponent,
    TitleBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
