import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio', loadChildren:()=>
    import('./Components/inicio/inicio.module').then((m)=>m.InicioModule)
  },
  {path:'**', redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
