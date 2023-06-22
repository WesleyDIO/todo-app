import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserRepository } from 'src/repositories/user.repository';
import { TodoComponent } from 'src/app/todo/todo.component';
import { CategoriaComponent } from 'src/app/categoria/categoria.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CategoriaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
