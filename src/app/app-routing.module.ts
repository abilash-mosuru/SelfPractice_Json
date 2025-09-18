import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';
import { ViewByIdComponent } from './components/view-by-id/view-by-id.component';

const routes: Routes = [
  {path:'',redirectTo:'viewStudent',pathMatch:"full"},
  {path:'viewStudent',component:ViewComponent},
  {path:'addStudent',component:AddComponent},
  {path:'viewById/:id',component:ViewByIdComponent},
  {path:'viewStudent/:id',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
