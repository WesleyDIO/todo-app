import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserRepository } from 'src/repositories/user.repository';
import { TodoComponent } from 'src/app/todo/todo.component';
import { CategoriaComponent } from 'src/app/categoria/categoria.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { TesteService } from 'src/services/teste.service';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CategoriaComponent,
    CadastroUsuarioComponent, 
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserRepository,
    AuthGuardService,
    TesteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
