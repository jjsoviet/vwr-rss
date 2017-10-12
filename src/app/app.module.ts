import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components to be declared and used
import { NavbarComponent } from './views/components/navbar.component';
import { FeedViewComponent } from './views/components/feed-view.component';
import { RssService } from './services/rss.service';

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
    RssService
  ],
  bootstrap: [
    NavbarComponent,
    FeedViewComponent
  ]
})
export class AppModule { }
