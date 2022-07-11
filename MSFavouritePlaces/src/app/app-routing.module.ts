import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SearchPlaceComponent } from './search-place/search-place.component';
import { ChangeContentComponent } from './change-content/change-content.component';
import { AllContentListComponent } from './all-content-list/all-content-list.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full",
  },
  
  {
    path: "filterlist",
    component: ContentListComponent,
  },
  {
    path: "list",
    component: AllContentListComponent,
  },
  {
    path: "detail/:id",
    component: DetailContentComponent
  },
  {
    path: "search",
    component: SearchPlaceComponent
  }, {
    path: "addContent",
    component: ChangeContentComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }