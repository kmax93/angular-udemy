import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefasComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';

@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent, 
    EditarTarefaComponent, 
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], 
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }