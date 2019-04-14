import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  guardarTarefas(tarefas: Tarefa[]): void {
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  //método que retorna uma lista com todas as tarefas
  listar(): Tarefa[] {
    //              pega informações do navegador
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  //método para criar uma nova tarefa
  criar(tarefa: Tarefa): void {
    const tarefas = this.listar();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    this.guardarTarefas(tarefas);
  }

  //método para buscar tarefa por id
  buscarPorId(id: number): Tarefa {
    return this.listar().find(tarefa => tarefa.id === id);
  }

  //método para atualizar tarefa
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listar();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    this.guardarTarefas(tarefas);
  }

  //método para remover tarefa
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listar();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    this.guardarTarefas(tarefas);
  }

  //método para alterar o status da tarefa
  alterarStatus(id: number): void {
    let tarefas: Tarefa[] = this.listar();
    tarefas.forEach((obj, index, objs) => {
      if (obj.id === id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    this.guardarTarefas(tarefas);
  }

}