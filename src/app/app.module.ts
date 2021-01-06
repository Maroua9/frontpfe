import { GestionService } from './gestion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TypepfeComponent } from './typepfe/typepfe.component';
@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AddComponent,
    TypepfeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
