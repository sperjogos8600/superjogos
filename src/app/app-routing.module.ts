import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'entrar',
    loadChildren: () => import('./pages/entrar/entrar.module').then( m => m.EntrarPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./pages/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'permissoes',
    loadChildren: () => import('./pages/permissoes/permissoes.module').then( m => m.PermissoesPageModule)
  },
  {
    path: 'recsenha',
    loadChildren: () => import('./pages/recsenha/recsenha.module').then( m => m.RecsenhaPageModule)
  },
  {
    path: 'recsenha2',
    loadChildren: () => import('./pages/recsenha2/recsenha2.module').then( m => m.Recsenha2PageModule)
  },
  {
    path: 'recsenha3',
    loadChildren: () => import('./pages/recsenha3/recsenha3.module').then( m => m.Recsenha3PageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'chave',
    loadChildren: () => import('./pages/chave/chave.module').then( m => m.ChavePageModule)
  },
  {
    path: 'pix',
    loadChildren: () => import('./pages/pix/pix.module').then( m => m.PixPageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  {
    path: 'pix2',
    loadChildren: () => import('./pages/pix2/pix2.module').then( m => m.Pix2PageModule)
  },
  {
    path: 'transacao',
    loadChildren: () => import('./pages/transacao/transacao.module').then( m => m.TransacaoPageModule)
  },
  {
    path: 'valor',
    loadChildren: () => import('./pages/valor/valor.module').then( m => m.ValorPageModule)
  },
  {
    path: 'megafuts',
    loadChildren: () => import('./pages/megafuts/megafuts.module').then( m => m.MegafutsPageModule)
  },
  {
    path: 'domino',
    loadChildren: () => import('./pages/domino/domino.module').then( m => m.DominoPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/game/game.module').then( m => m.GamePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
