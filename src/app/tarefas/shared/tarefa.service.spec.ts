import { TestBed } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';

describe('TarefaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarefaService = TestBed.get(TarefaService);
    expect(service).toBeTruthy();
  });

  it('deve retornar tarefas', () => {
    const service: TarefaService = TestBed.get(TarefaService);
    let tarefas = service.listar();
    expect(tarefas).toBeNull();
  });

});
