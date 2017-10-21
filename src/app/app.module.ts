import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';

// Components to be declared and used
import { NavbarComponent } from './views/components/navbar.component';
import { FeedViewComponent } from './views/components/feed-view.component';
import { FeedDetailComponent } from './views/components/feed-detail.component';
import { FeedService } from './services/feed.service';
import { DTOService } from './services/dto.service';

@NgModule({
  declarations: [
    NavbarComponent,
    FeedViewComponent,
    FeedDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ShareButtonsModule.forRoot()
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
