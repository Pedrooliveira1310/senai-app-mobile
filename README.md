# App de Boas-Vindas da Escola

## Descrição

Este projeto foi desenvolvido como atividade introdutória ao React Native utilizando Expo.

O objetivo é criar um aplicativo simples de boas-vindas para novos estudantes do curso de Programação Mobile, permitindo verificar se o ambiente de desenvolvimento está configurado corretamente e apresentar os conceitos básicos da plataforma.

---

## Funcionalidades

* Tela principal com fundo roxo.
* Layout centralizado.
* Exibição de imagem armazenada na pasta `assets`.
* Título de boas-vindas.
* Texto explicativo sobre o aplicativo.
* Botão interativo para testar a aplicação.
* Compatibilidade com Android, iOS e Web.
* Exibição de mensagem ao clicar no botão.

---

## Tecnologias Utilizadas

* React Native
* Expo
* JavaScript

---

## Estrutura do Projeto

```text
projeto/
│
├── assets/
│   └── logo.png
│
├── App.js
│
├── package.json
│
└── README.md
```

---

## Como Executar o Projeto

### 1. Instalar as dependências

```bash
npm install
```

### 2. Iniciar o Expo

```bash
npx expo start
```

### 3. Executar o aplicativo

* Pressione **a** para Android.
* Pressione **i** para iOS (macOS).
* Pressione **w** para Web.
* Ou utilize o aplicativo **Expo Go** para escanear o QR Code.

---

## Requisitos Implementados

### Tela Principal

* Fundo na cor roxa.
* Componentes centralizados na tela.

### Imagem

* Imagem armazenada na pasta `assets`.

### Textos

* Título: **Bem-vindo ao App da Escola**
* Descrição: **Este é o seu primeiro app em React Native com Expo**

### Botão

* Texto: **Testar Aplicação**
* Exibe uma mensagem ao ser pressionado.

### Compatibilidade

* Android
* iOS
* Web

---

## Objetivos de Aprendizagem

Durante o desenvolvimento desta atividade foram utilizados os seguintes conceitos:

* Estrutura básica do arquivo `App.js`
* Componentes `View`, `Text`, `Image` e `Button`
* Estilização com `StyleSheet`
* Eventos com `onPress`
* Compatibilidade entre Web e Mobile utilizando `Platform`

---

## Autor

Pedro de Oliveira

Curso: Desenvolvimento de Sistemas
Disciplina: Programação Mobile
