import { Routes } from '@angular/router';
import { CadastroTarefasComponent } from './components/pages/cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './components/pages/consulta-tarefas/consulta-tarefas.component';
import { EdicaoTarefasComponent } from './components/pages/edicao-tarefas/edicao-tarefas.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'pages/dashboard', //rota de navegacao
        component: DashboardComponent, //componente
        pathMatch: 'full' // Garante que o path seja exatamente vazio
    },
    {
        path: 'pages/cadastro-tarefas', //rota de navegacao
        component: CadastroTarefasComponent //componente
    },
    {
        path: 'pages/consulta-tarefas', //rota de navegacao
        component: ConsultaTarefasComponent //componente
    },
    {
        path: 'pages/edicao-tarefas/:id', //rota de navegação
        component: EdicaoTarefasComponent //componente
    },
    {
        // Opcional: Rota curinga para lidar com caminhos não encontrados (404)
        path: '**',
        redirectTo: 'pages/dashboard'
    }
];
