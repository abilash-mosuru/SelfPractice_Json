import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import { ViewByIdComponent } from './components/view-by-id/view-by-id.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    ViewByIdComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
