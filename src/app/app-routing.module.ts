import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostOneComponent } from "./Pages/post-one/post-one.component";
import { MainGridComponent } from "./Pages/main-grid/main-grid.component";
import { MainGridLoginMessageComponent } from "./Pages/main-grid-login-message/main-grid-login-message.component";
import { MainGridLoginMetaMaskComponent } from "./Pages/main-grid-login-meta-mask/main-grid-login-meta-mask.component";
import { MainGridSearchComponent } from "./Pages/main-grid-search/main-grid-search.component";
import { MainListComponent } from "./Pages/main-list/main-list.component";

const routes: Routes = [
  {path: 'post-one', component: PostOneComponent},
  {path: 'main-grid', component: MainGridComponent},
  {path: 'main-grid-login-message', component: MainGridLoginMessageComponent},
  {path: 'main-grid-login-meta-mask', component: MainGridLoginMetaMaskComponent},
  {path: 'main-grid-search', component: MainGridSearchComponent},
  {path: 'main-list', component: MainListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
