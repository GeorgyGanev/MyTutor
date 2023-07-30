import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TutorListComponent } from "./tutor-list/tutor-list.component";
import { TutorShortCardComponent } from "./tutor-short-card/tutor-short-card.component";



const  routes: Routes = [
   
   
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TutorRoutingModule { }