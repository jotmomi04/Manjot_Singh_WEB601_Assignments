import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { ContentListComponent } from './content-list/content-list.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full",
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "detail/:id",
    component: DetailContentComponent
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }