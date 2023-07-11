import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/app/categoria/categoria.component";
import { TodoComponent } from "src/app/todo/todo.component";
import { AuthGuardService } from "src/services/auth-guard.service";
import {CadastroUsuarioComponent} from "./cadastro-usuario/cadastro.component";
import { LoginComponent } from "./login/login.component";

const rotas: Route[] = [
    {
        path: 'categoria',
        component: CategoriaComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'todo',
        component: TodoComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'cadastro',
        component:   CadastroUsuarioComponent

    },
    {
    path: 'login',
    component: LoginComponent
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    }
]


@NgModule({
    imports:[RouterModule.forRoot(rotas)],

    exports:[RouterModule]

})
export class AppRoutingModule{

}