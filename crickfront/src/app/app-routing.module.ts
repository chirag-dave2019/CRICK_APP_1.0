import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { HistoryComponent } from "./pages/history/history.component";
import { LiveComponent } from "./pages/live/live.component";
import { PointTableComponent } from "./pages/point-table/point-table.component";

export const routes: Routes = 
[
{
    path:'',
    redirectTo:'/live',
    pathMatch:'full'
},
{
    path:"home",
    component:HomeComponent,
    title:"Home | CricketApp"
},
{
    path:"history",
    component:HistoryComponent,
    title:"Match history | CricketApp"
},
{
    path:"live",
    component:LiveComponent,
    title:"Live | CricketApp"
},
{
    path:"point-table",
    component:PointTableComponent,
    title:"Point Table | CricketApp"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
