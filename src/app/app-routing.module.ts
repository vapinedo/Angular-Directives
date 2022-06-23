import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  { path: "", component: NgIfComponent },
  { path: "ng-switch", component: NgSwitchComponent },
  { path: "input-output", component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
