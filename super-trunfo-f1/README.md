# 🏎️ Super Trunfo F1 - React Native App (Versão com Componentes e Hooks)

Este projeto é um aplicativo desenvolvido com **React Native** e **Expo** com fins educacionais, utilizando boas práticas como **componentização**, **hooks** para gerenciamento de estado e **framework visual (React Native Paper)**. O app simula cartas do jogo **Super Trunfo**, exibindo dados históricos de pilotos da Fórmula 1.

## 📱 Funcionalidades

O aplicativo sorteia e exibe uma carta de piloto com:

- Nome e imagem do piloto
- País e equipe
- Títulos mundiais, pódios e velocidade (visualmente com barras)
- Botão para **sortear um novo piloto aleatório**

## 💡 O que este projeto ensina

- Criação e reutilização de **componentes funcionais**
- Uso de **hooks (`useState`)**
- Estilização com **React Native Paper**
- Organização e separação de responsabilidades (dados, componentes, interface)
- Trabalhar com **imagens via URL**
- Utilização de **barras de progresso** para visualização de atributos

## 🧑‍💻 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- JavaScript

## 🗂 Estrutura do Projeto

```
.
├── App.js                   # Tela principal com lógica de sorteio
├── components
│   └── Driver.jsx           # Componente visual do piloto
├── data
│   └── drivers.js           # Lista estática de pilotos com stats
└── assets                   # (opcional, caso use ícones ou fontes)
```

## 🚀 Como Executar

1. Certifique-se de ter o **Node.js** e o **Expo CLI** instalados:

```bash
npm install -g expo-cli
```

2. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/super-trunfo-f1.git
cd super-trunfo-f1
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o projeto:

```bash
npx expo start
```

Abra no navegador, emulador Android/iOS ou escaneie o QR code com o app **Expo Go**.

## 🌍 Fontes das Imagens

As imagens dos pilotos são carregadas diretamente via URLs públicas de sites como Wikipedia, DriverDB, Globo Esporte e CNN Brasil. Este uso é exclusivamente para **fins educacionais**.

## 👨‍🏫 Créditos

Este projeto foi desenvolvido como prática da disciplina de **Soluções Mobile** dos cursos de **Engenharia de Software e Engenharia da Computação** na [UniSATC](https://www.satc.edu.br/), sob orientação do prof. Thyerri Mezzari.

---

Contribuições e adaptações são bem-vindas! Faça um fork e envie seu pull request.
