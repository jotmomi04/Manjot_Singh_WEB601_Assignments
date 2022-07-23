import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FilterContentPipe } from './filter-content.pipe';
import { HighlighterImportantDataDirective } from './highlighter-important-data.directive';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchPlaceComponent } from './search-place/search-place.component';
import { LinksComponent } from './links/links.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
//added sevices
import { HttpClientModule } from"@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ChangeContentComponent } from './change-content/change-content.component';
import { AllContentListComponent } from './all-content-list/all-content-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterContentPipe,
    HighlighterImportantDataDirective,
    DetailContentComponent,
    SearchPlaceComponent,
    LinksComponent,
    BottomNavComponent,
    ChangeContentComponent,
    AllContentListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      delay: 1000,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
