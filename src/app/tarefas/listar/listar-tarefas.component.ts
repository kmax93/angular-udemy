import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listar();
  }

  //método que retorna a lista de tarefas
  listar(): Tarefa[] {
    return this.tarefaService.listar();
  }

  //event é o objeto do navegador, utlizado aqui para nao recarregar a página
  //método que remove tarefa
  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm("Deseja remover a tarefa " + tarefa.nome + " ?")) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listar();
    }
  }

  //método que altera status da tarefa
  alterarStatus(tarefa: Tarefa): void {
    this.tarefaService.alterarStatus(tarefa.id);
    this.tarefas = this.listar();
  }

}
