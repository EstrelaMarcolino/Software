<h1>SOFTWARE DE GERENCIAMENTO E DIVULGAÇÃO DE MODELOS (E-COMMERCE) </h1>

## ESCOPO

Objetivos e finalidades: 


O objetivo principal do sistema será representar e promover modelos, otimizando o gerenciamento das agências, permitindo assim o controle eficiente das agências e dos modelos.


### Objetivo geral

Desenvolver um software para gerenciamento e divulgação de modelos (e-commerce).


#### Ojetivos específicos
           
*  Desenvolver uma ferramenta de chat interativa integrada à aplicação, visando facilitar a comunicação eficiente entre as agências de moda, modelos e clientes, proporcionando um atendimento personalizado e ágil.

*  Desenvolver um sistema de e-commerce robusto e adaptável, capaz de atender às necessidades das agências de moda, oferecendo suporte multilíngue para alcançar um público global e facilitar transações comerciais internacionais.

*  Estabelecer um banco de dados centralizado para armazenar e gerenciar as informações das agências do mercado da moda, garantindo a integridade e segurança dos dados, e facilitando o acesso rápido e eficiente às informações relevantes.

*  Criar uma interface de usuário intuitiva e responsiva, projetada para proporcionar uma experiência de uso simples e eficaz para clientes, empresas e outros usuários, permitindo interações fluidas e facilitando a navegação e utilização do sistema.

*  Por meio da criação do software de gerenciamento e divulgação de modelos, contribuir para o avanço e modernização da indústria da moda, oferecendo uma solução inovadora que otimiza processos, promove a transparência e facilita o acesso a oportunidades para modelos e agências.



# Funcionalidades:

*  Cadastro de Agências:Permitir cadastro de novas agências no sistema,incluindo informações como nome da agência,Contacto,CNPJ, endereço e E-mail etc.

*  Cadastro de usuários(clientes): Permitir o registro de novos usuários no sistema, incluindo informações como nome, contacto, endereço, e-mail, entre outros.

* Consulta de acervo: Permitir que usuários e agências de moda consultem o acervo de fotográfia e videos dos modelos disponíveis, podendo buscar por meio do nome do modelo ou da agência etc.

Requisitos:

* O sistema deve garantir a segurança dos dados, exigindo autenticação para acesso e protegendo as informações pessoais dos usuários(Agências e clientes).

* O sistema deve garantir  o controle das agências e modelos do mercado proporcionando segurança ao cliente.

* O sistema deve suportar múltiplos usuários acessando o sistema simultaneamente, mantendo a integridade dos dados.

Limitações e exclusão:

* O sistema não irá lidar com transações financeiras, como cobrança de multas por atraso  ou não comprimento dos serviços fornecidos pelas agências.

Interfaces:

* O sistema deve ser acessível via navegador web, com suporte para dispositivos desktop e móveis. Deve também integrar-se com o sistema chamado "Consulta CNPJ", que permite verificar a autenticidade de um CNPJ 
para permitir o acesso das agências autorizadas.

Usuários e perfis de usuarios:

* Administrador: Responsável por gerenciar o acervo, cadastrar novos usuários, gerar relatórios, entre outras tarefas administrativas.

Membros da equipe:

Dimir Zeferino Cuma - PO.

Estrela José Marcolino – dev Backend.

Adilson Leonardo Morgado Cabaça –  dev frontend.

Carla Carlos Sá – Designer

Liguagem de programação: javascript.

Linguagem de Marcação: HTML.

Linguagem de Estilização: CSS.

Ferramentas: Figma,Node.js e o Vite.js.


# JUSTIFICATIVA DO PROJETO

* Este projeto busca prosseguir com uma pesquisa já iniciada e ampliar o estudo, sugerindo a criação de um software de gerenciamento e divulgação de modelos (e-commerce). Embora existam diversas agências físicas e digitais na indústria da moda que utilizam uma variedade de ferramentas e tecnologias para gerenciar suas operações, desde sistemas de gerenciamento de conteúdo até análise de desempenho na web, falta uma solução abrangente que tenha como objetivo principal gerenciar e validar a autenticidade das agências e modelos, garantindo a proteção dos clientes. É uma realidade lamentável que muitos indivíduos tenham tido seus sonhos de se tornarem modelos frustrados devido a agências fraudulentas que se aproveitam de suas aspirações. A existência de numerosas agências torna ainda mais desafiador verificar a legitimidade de um modelo desconhecido, prolongando o processo de verificação e prejudicando as oportunidades de carreira. Diante desse cenário dinâmico da indústria da moda, onde a demanda por novos talentos é constante, surge a necessidade de uma plataforma centralizada, uma espécie de "agência mãe", que unifique e valide todas as agências de moda. 


# BACKLOG DO PRODUTO

Como dono/a da agência de modelos, desejo ter a capacidade de gerenciar os perfis dos modelos em nosso sistema, para que eu possa atualizar informações, adicionar novos modelos e remover modelos existentes conforme necessário.

• O sistema deve fornecer também uma interface de administração acessível aos donos/as da agência.

• O dono/a da agência deve poder visualizar uma lista de todos os perfis de modelos registrados no sistema.

• O dono/a da agência deve ter a capacidade de visualizar os detalhes completos do perfil de cada modelo, incluindo nome, idade, altura, medidas, fotos e outras informações relevantes.

• O dono/a da agência deve poder atualizar as informações dos perfis dos modelos, incluindo nome, idade, altura, medidas, fotos e descrição.

• O dono/a da agência deve poder adicionar novos perfis de modelos ao sistema, inserindo todas as informações necessárias.

• O dono/a da agência deve poder remover perfis de modelos existentes do sistema, garantindo que todas as referências a esse modelo sejam removidas de forma adequada.

Como usuários,gostaria de logar no sistema com os seguintes dados, nome, contacto, endereço, e-mail para realizar atividade de contratação de modelo através do sistema.

Critérios de aceitação(Registro de Novo Usuário):

• O sistema deve fornecer um formulário de registro com campos para inserir nome, contato, endereço e e-mail.

• Todos os campos devem ser obrigatórios para preenchimento.

• O sistema deve validar o formato do e-mail inserido.

• Após o preenchimento correto do formulário, o sistema deve armazenar as informações do novo usuário.

• O sistema deve enviar um e-mail de confirmação para o endereço fornecido pelo usuário.

Critérios de aceitação (Entrada no Sistema):

• O sistema deve apresentar um formulário de login na página inicial.

• O usuário deve fornecer o nome de usuário e a senha para acessar o sistema.

• O sistema deve verificar se os dados de entrada são válidos e correspondem a um usuário registrado.

• Se os dados estiverem corretos, o sistema deve redirecionar o usuário para a página principal do sistema.

Como usuário,quero ser capaz de adicionar produtos(modelos) de minha preferência ao meu carrinho de compras para poder contratar vários modelos de uma só vez da mesma ou de outra agência.

Critérios de aceitação (Atividade de Contratação de Modelos):

• O sistema deve fornecer uma interface intuitiva para buscar e visualizar modelos disponíveis para contratação.

• O usuário deve poder selecionar um modelo desejado e prosseguir para a contratação.

• O sistema deve permitir que o usuário especifique os detalhes da contratação, como data, hora, localização, etc.

• Após confirmar a contratação, o sistema deve registrar as informações da contratação e notificar o modelo contratado e o usuário por e-mail.

Como administrador do (software de gerenciamento e divulgação de Modelos),desejo ter a capacidade de gerenciar os perfis dos modelos em nosso sistema, para que eu possa atualizar informações, adicionar novos modelos e remover modelos existentes conforme necessário.

• O sistema deve fornecer uma interface de administração geral acessível apenas ao administrador.

• O administrador deve poder visualizar uma lista de todos os perfis de modelos registrados no sistema.

• O administrador deve ter a capacidade de visualizar os detalhes completos do perfil de cada modelo, incluindo nome, idade, altura, medidas, fotos e outras informações relevantes.

• O administrador deve poder atualizar as informações dos perfis dos modelos, incluindo nome, idade, altura, medidas, fotos e descrição.

• O administrador deve poder adicionar novos perfis de modelos ao sistema, inserindo todas as informações necessárias.

• O administrador deve poder remover perfis de modelos existentes do sistema, garantindo que todas as referências a esse modelo sejam removidas de forma adequada.


# BACKLOG DA SPRINT

PO(Responsável por garantir que o backlog do produto seja gerenciado de forma eficaz,fornecendo visão e estratégias do produto).@DimirCuma

Responsável pela (UI & UX): ferramente figma.@Carla Carlos Sá

Implementar Base Tecnologica Frontend: Vitejs.@AdilsonCabaça

Implementar Base Tecnologica Backend: Node.JS com Express.@Estrela Marcolino

como administrador, gostaria de gerenciar o sistema

•Formulario Frontend @AdilsonCabaça

•Filtro de autenticação Login Frontend (Adiciona o token a requisições feitas por um usuario autenticado).@AdilsonCabaça

•Rest Backend - POST @EstrelaMarcolino

como dono/a da agência,gostaria de gerenciar os perfis de modelo da agência

•Formulario Frontend @AdilsonCabaça

•Filtro de autenticação Login Frontend (Adiciona o token a requisições feitas por um usuario autenticado).@AdilsonCabaça 

•Rest Backend - POST @EstrelaMarcolino

Como usuário, gostaria de Criar conta

•Formulario Frontend @AdilsonCabaçat

•Rest Backend - POST @EstrelaMarcolino

•Tabela Conta @AdilsonCabaça

Como usuário, gostaria de Fazer Login

•Formulário Login @AdilsonCabaça

•Filtro de autenticação Login Frontend (Adiciona o token a requisições feitas por um usuario autenticado) @AdilsonCabaça

•Rest Backend - POST @EstrelaMarcolino

Como usuário, gostaria de Visualizar minha conta

•Formulário FrontEnd @AdilsonCabaça

•Rest Backend - GET @EstrelaMarcolino

Como usuário, gostaria de Alterar minha foto

•Botão alterar foto no formulário visualizar conta.@AdilsonCabaça

•Rest Backend - POST @EstrelaMarcolino

•Como usuário, gostaria de Alterar senha

•Formulario alterar senha, apartir do minha conta @Adilson Cabaça

•Backend alterar senha - POST @EstrelaMarcolino



