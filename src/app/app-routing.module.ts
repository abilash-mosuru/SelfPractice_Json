import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';
import { ViewByIdComponent } from './components/view-by-id/view-by-id.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'',redirectTo:'viewStudent',pathMatch:"full"},
  {path:'viewStudent',component:ViewComponent},
  {path:'addStudent',component:AddComponent},
  {path:'viewById/:id',component:ViewByIdComponent},
  {path:'deleteStudent/:id',component:ViewComponent},
  {path:'updateStudent/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
