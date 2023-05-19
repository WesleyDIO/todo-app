import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CategoriaComponent } from "../categoria/categoria.component";

@NgModule({
   declarations:[
    CategoriaComponent,
    FormsModule,
    CommonModule
   ],
   imports:[
      CategoriaComponent,
      FormsModule,
      CommonModule
   ]
})
export class TodoModule{

}