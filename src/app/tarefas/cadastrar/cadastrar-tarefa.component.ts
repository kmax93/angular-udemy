import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa, TarefaService } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  //Objeto que representa o form na view
  //o valor passado no parâmetro deve ser o mesmo que foi criado na tag form da view
  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  //método que checa se o form está válido e cria uma nova tarefa
  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.criar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}