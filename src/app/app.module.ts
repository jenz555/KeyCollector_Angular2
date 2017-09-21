import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { KcFooterComponent } from './kc-footer/kc-footer.component';
import { KcHeroComponent } from './kc-hero/kc-hero.component';
import { KcContactComponent } from './kc-contact/kc-contact.component';
import { KcMenuComponent } from './kc-menu/kc-menu.component';



@NgModule({
  
  declarations: [
    AppComponent,
    KcFooterComponent,
    KcHeroComponent,
    KcContactComponent,
    KcMenuComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
