# Reducicla Web APP

Este projeto foi gerado utilizado o framework [Angular CLI](https://github.com/angular/angular-cli) em sua versão 11.2.3.

Este projeto segue a proposta de desenvolvimento de uma landing page para a REDUCICLA. Além disso, contempla rota para `/login` (local onde o usuário admin realiza autenticação para acessar o painel administrativo) e outra para `/painel` (área administrativa do usuário admin - relatórios e gestão de informações) que exibe informações integradas ao APP.

O projeto utiliza uma arquitetura modularizada da seguinte maneira:
- @Core: models, services, interfaces, interceptors, guards e enumerateds;
- @Shared: Componentes compartilhados com o restante da aplicação;
- @Pages: Componentes que contemplam a construção de uma página(view).

# Imagens Demonstrativas
![Home](/src/assets/images/github/banner-hero.png)
![Dashboard](src\assets\images\github\admin-dashboard.png)
![Detalhes Coleta](/src/assets/images/github/coleta-detail.png)

## Rodando a Aplicação Localmente

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem. 

## Para Desenvolvimento

Execute `ng generate component-name` para gerar um novo componente. Você também pode usar `ng generate directive | pipe | service | class | guard | interface | enum | module`. 

## Build da Aplicação

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`. Use o sinalizador `--prod` para uma construção de produção. 


## Help

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Visão geral e referência de comandos do Angular CLI] (https://angular.io/cli). 
