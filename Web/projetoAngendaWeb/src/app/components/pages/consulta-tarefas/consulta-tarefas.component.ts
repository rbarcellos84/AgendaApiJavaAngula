import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core'; // Importe OnInit
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router'; // para redirecionar a pagina pelo typescript
import { CryptoService } from '../../../services/crypto.service'; // serviço de cryptografia

@Component({
  selector: 'app-consulta-tarefas',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './consulta-tarefas.component.html',
  styleUrl: './consulta-tarefas.component.css'
})

/**************************************
        <<<--- cryptojs --->>>
***************************************
npm install crypto-js
npm i --save-dev @types/crypto-js
ng generate service services/crypto
**************************************/

export class ConsultaTarefasComponent implements OnInit { // Implementa OnInit para o ciclo de vida

  // Atributos do componente
  mensagem: string = "";
  tarefas: any[] = []; // Array para armazenar as tarefas retornadas da API
  tarefaSelecionada: any; // Objeto para armazenar a tarefa selecionada para exclusão

  // Injeções de dependência usando 'inject()' 
  http = inject(HttpClient); // Serviço para requisições HTTP
  fb = inject(FormBuilder); // Serviço para construir formulários reativos
  router = inject(Router); // Serviço para navegação entre rotas
  cryptoService = inject(CryptoService); // Nosso serviço de criptografia

  // Estrutura do formulário reativo
  form = this.fb.group({
    dataMin : new FormControl<string | null>('', [Validators.required]), // Campo para data mínima
    dataMax : new FormControl<string | null>('', [Validators.required])  // Campo para data máxima
  });

  ngOnInit(): void {
    // Lendo e descriptografando o estado do formulário do sessionstorage
    const encryptedFormState = sessionStorage.getItem('#$@!&%');
    if (encryptedFormState) {
      const decryptedFormState = this.cryptoService.decrypt(encryptedFormState);
      if (decryptedFormState) { // Verifica se a descriptografia foi bem-sucedida
        // Preenche o formulário com os valores descriptografados
        this.form.patchValue(decryptedFormState);
        this.onSubmit(); //realizando a consulta no iniciar
      } else {
        this.onClearFormState(0);
      }
    }
    else{
      this.onClearFormState(0);
    }
  }

  // Metodo responsavel pela consulta do formulario
  onSubmit(): void {
    this.onClearFormState(1);

    // Guarda os valores do formulário em variáveis (com tratamento para 'null' se necessário)
    const dataMin = this.form.value.dataMin as string;
    const dataMax = this.form.value.dataMax as string;

    // Fazendo uma requisição HTTP GET para a API de tarefas
    this.http.get(`${environment.apiTarefas}/tarefas/${dataMin}/${dataMax}`)
      .subscribe({
        next: (response) => { // Sucesso na resposta da API
          this.tarefas = response as any[];
        },
        error: (error) => { // Erro na requisição HTTP
          this.mensagem = "Erro ao consultar tarefas";
        }
      });
  }

  onExcluir(tarefa: any): void {
    this.tarefaSelecionada = tarefa; // Armazena a tarefa selecionada
  }

  // Função chamada ao clicar em "Editar" em uma tarefa.
  onEditar(tarefa: any): void {
    // Criptografando e salvando o estado atual do formulário no sessionstorage
    const encryptedData = this.cryptoService.encrypt(this.form.value);
    const encryptedId = this.cryptoService.encrypt(tarefa.id);
    sessionStorage.setItem('#$@!&%', encryptedData);
    this.router.navigate(['/pages/edicao-tarefas', encryptedId]);
  }

  // Função para realizar a exclusão da tarefa selecionada.
  onDelete(): void {
    if (!this.tarefaSelecionada || !this.tarefaSelecionada.id) {
      this.mensagem = "Nenhuma tarefa selecionada para exclusão ou ID inválido.";
      return;
    }

    // Fazendo uma requisição HTTP DELETE para a API
    this.http.delete(`${environment.apiTarefas}/tarefas/${this.tarefaSelecionada.id}`)
      .subscribe({
        next: () => { // Sucesso na exclusão
          // console.log('Tarefa excluída com sucesso:', this.tarefaSelecionada.id);
          // Remove a tarefa do array local
          this.tarefas = this.tarefas.filter(t => t.id !== this.tarefaSelecionada.id);
          this.tarefaSelecionada = null; // Limpa a tarefa selecionada
          this.mensagem = "";
        },
        error: (error) => { // Erro na requisição HTTP
          this.mensagem = "Erro ao excluir tarefa:";
        }
      });
  }

  // Reseta todos os campos do formulário para o estado inicial
  onClearFormState(op: number): void {
    sessionStorage.removeItem('#$@!&%');
    if (op == 0)
      this.form.reset();
  }
}
