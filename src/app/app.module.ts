import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MetaCloudModule } from './meta-cloud/meta-cloud.module'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MetaCloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
