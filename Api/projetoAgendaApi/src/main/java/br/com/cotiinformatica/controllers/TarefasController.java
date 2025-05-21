package br.com.cotiinformatica.controllers;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/v1/tarefas")
@Tag(name = "Tarefas", description = "Serviço para operações relacionadas a tarefas.")
public class TarefasController {

	@Operation(summary = "Cadastro de tarefa", description = "Cria uma nova tarefa no banco de dados.")
	@PostMapping
	public void post() {
		// TODO Implementar o serviço para cadastro de tarefa
	}

	@Operation(summary = "Edição de tarefa", description = "Atualiza os dados de uma tarefa no banco de dados.")
	@PutMapping
	public void put() {
		// TODO Implementar o serviço para edição de tarefa
	}

	@Operation(summary = "Exclusão de tarefa", description = "Exclui uma tarefa no banco de dados.")
	@DeleteMapping
	public void delete() {
		// TODO Implementar o serviço para exclusão de tarefa
	}

	@Operation(summary = "Consulta de tarefas", description = "Retorna todas as tarefas cadastradas no banco de dados.")
	@GetMapping
	public void get() {
		// TODO Implementar o serviço para consulta de tarefas
	}
}
