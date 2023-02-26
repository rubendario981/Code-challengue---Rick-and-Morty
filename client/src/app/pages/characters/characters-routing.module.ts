import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaisCharacterComponent } from '../detais-character/detais-character.component';

const routes: Routes = [
  {
    path: "",
    component: DetaisCharacterComponent
  },
  {
    path: "details/:id",
    component: DetaisCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
