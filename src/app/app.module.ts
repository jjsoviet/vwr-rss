import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components to be declared and used
import { NavbarComponent } from './views/components/navbar.component';
import { FeedViewComponent } from './views/components/feed-view.component';
import { FeedService } from './services/feed.service';
import { DTOService } from './services/dto.service';

@NgModule({
  declarations: [
    NavbarComponent,
    FeedViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FeedService,
    DTOService
  ],
  bootstrap: [
    NavbarComponent,
    FeedViewComponent
  ]
})
export class AppModule { }
