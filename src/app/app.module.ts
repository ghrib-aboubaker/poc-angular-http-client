import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetComponent } from './get.component';
import { PostComponent } from './post.component';
import { PutComponent } from './put.component';
import { DeleteComponent } from './delete.component';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    PostComponent,
    PutComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
