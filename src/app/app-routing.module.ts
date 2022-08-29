import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from './Components/feeds/feeds.component';

const routes: Routes = [
  {path:"home",component:FeedsComponent},
  {path:"meggaes",component:FeedsComponent},
  {path:"profile",component:FeedsComponent},
  {path:"Saved post",component:FeedsComponent},
  {path:"settings",component:FeedsComponent},
  {path:"**" , component:FeedsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
