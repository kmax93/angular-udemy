import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa, TarefaService } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  //Objeto que representa o form na view
  //o valor passado no parâmetro deve ser o mesmo que foi criado na tag form da view
  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
              //pegando o valor passado na url
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  //método que checa se o form está válido edita a tarefa
  atualizar(): void {
    if (this.formTarefa.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}