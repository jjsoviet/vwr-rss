import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';

// Components to be declared and used
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/components/navbar.component';
import { FeedDetailComponent } from './views/components/feed-detail.component';
import { SourceService } from './services/source.service';
import { FeedService } from './services/feed.service';

@NgModule({
  // Declarations for View Components
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedDetailComponent
  ],
  // External Module Imports
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ShareButtonsModule.forRoot()
  ],
  // Service/Dependency Providers
  providers: [
    SourceService,
    FeedService
  ],
  // View Components to be Bootstrapped
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
