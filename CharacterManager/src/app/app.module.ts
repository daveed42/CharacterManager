import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { SideBarComponent } from './components/sideBar.component';
import { MainComponent } from './components/main.component';
import { CharacterInfoComponent } from './components/charInfo.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainComponent,
    CharacterInfoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
