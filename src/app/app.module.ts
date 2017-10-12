import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components to be declared and used
import { AppComponent } from './app.component';
import { ObjectDetailComponent } from './object-detail.component';
import { ObjectService } from './object.service';

@NgModule({
  declarations: [
    AppComponent,
    ObjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
