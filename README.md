# CC4670_Projeto_2
Projeto 2 da disciplina de Computação Móvel, aplicativo criado usando React Native.
Aluno: Pedro Henrique Silva Reis
RA: 11.120.129-9

# Sistema de Controle de Presença de Alunos

## Introdução

Este projeto é uma aplicação de controle de presença de alunos desenvolvida em React Native, que permite aos professores registrar a presença dos alunos em diferentes disciplinas de forma eficiente e rápida. O objetivo principal é facilitar a gestão da presença dos alunos e proporcionar um método prático para armazenar e acessar esses dados. O projeto utiliza o Firebase para armazenar as informações de presença e disciplinas, garantindo que os dados sejam acessíveis de qualquer lugar.

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/): Framework para desenvolvimento de aplicativos móveis multiplataforma.
- [Firebase](https://firebase.google.com/): Plataforma de desenvolvimento de aplicativos móveis e web que fornece serviços de backend como banco de dados em tempo real.
- [React Navigation](https://reactnavigation.org/): Biblioteca para roteamento e navegação em aplicativos React Native.
- [Toast](https://github.com/calintamas/react-native-toast-message): Biblioteca para exibir mensagens de notificação (toasts) no aplicativo.
- [Expo](https://expo.dev/): Plataforma para desenvolvimento de aplicativos React Native que facilita a configuração e desenvolvimento.

## Uso

O aplicativo de controle de presença possui uma interface simples e intuitiva, dividida em três telas principais:

1. **Tela de Menu (Menu.js):**
   - Apresenta três botões: "PRESENÇA", "HORÁRIO" e "DRIVE".
   - O botão "PRESENÇA" leva à tela de seleção de disciplinas.
   - O botão "HORÁRIO" leva à tela de visualização do horário das aulas.
   - O botão "DRIVE" abre um link externo.

2. **Tela de Seleção de Disciplinas (Subjects.js):**
   - Lista todas as disciplinas disponíveis.
   - O usuário seleciona uma disciplina e navega para a tela de registro de presença.

3. **Tela de Registro de Presença (Students.js):**
   - Exibe a lista de alunos.
   - O usuário pode marcar os alunos presentes e salvar a lista de presença juntamente com a disciplina selecionada.
   - Quando a lista é salva, uma notificação é exibida e o dispositivo vibra para confirmar a ação.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

├── assets # Arquivos de mídia, como imagens e ícones
├── components # Componentes reutilizáveis do React
├── Menu.js # Tela de menu principal
├── Subjects.js # Tela de seleção de disciplinas
├── Students.js # Tela de registro de presença
├── config # Pasta de configurações
│ ├── config.js # Configuração do Firebase
├── App.js # Arquivo principal da aplicação
├── package.json # Dependências e scripts do npm
└── README.md # Documentação do projeto

### Descrição dos Arquivos Principais

- **assets/**: Contém arquivos de mídia, como imagens e ícones utilizados na aplicação.
- **components/**: Contém componentes reutilizáveis do React que podem ser utilizados em diferentes partes do aplicativo.
- **screens/**:
  - **Menu.js**: Tela inicial que apresenta o menu principal do aplicativo.
  - **Subjects.js**: Tela para seleção de disciplinas, onde o usuário escolhe a disciplina para a qual deseja registrar a presença.
  - **Students.js**: Tela de registro de presença, onde o usuário marca os alunos presentes e salva as informações.
- **config.js**: Arquivo de configuração do Firebase, onde as credenciais e configurações do Firebase são definidas.
- **App.js**: Arquivo principal da aplicação que configura a navegação e renderiza as telas principais.
- **package.json**: Arquivo que define as dependências do projeto e scripts para gerenciamento do npm.
