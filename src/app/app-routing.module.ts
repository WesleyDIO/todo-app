import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/app/categoria/categoria.component";
import { TodoComponent } from "src/app/todo/todo.component";
import {CadastroUsuarioComponent} from "./cadastro-usuario/cadastro.component";
import { LoginComponent } from "./login/login.component";

const rotas: Route[] = [
    {
        path: 'categoria',
        component: CategoriaComponent
    },
    {
        path: 'todo',
        component: TodoComponent
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
        redirectTo:'todo',
        pathMatch:'full'
    }
]


@NgModule({
    imports:[RouterModule.forRoot(rotas)],

    exports:[RouterModule]

})
export class AppRoutingModule{

}