import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FilterContentPipe } from './filter-content.pipe';
import { HighlighterImportantDataDirective } from './highlighter-important-data.directive';
import { DetailContentComponent } from './detail-content/detail-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterContentPipe,
    HighlighterImportantDataDirective,
    DetailContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
