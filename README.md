# +Movie

Um aplicativo de filmes construído com React Native, que utiliza a API do TMDB (The Movie Database) para exibir informações sobre filmes, séries e muito mais.

## Descrição

O +Movie é um projeto que permite aos usuários pesquisar e visualizar informações detalhadas sobre filmes e séries. Com uma interface intuitiva e responsiva, o aplicativo oferece uma experiência de navegação fluida, apresentando resenhas, trailers e detalhes sobre os filmes.

## Funcionalidades

- Busca de filmes e séries
- Listagem de filmes em destaque
- Detalhes do filme, incluindo sinopse, elenco e avaliações
- Interface amigável e responsiva

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **TMDB API**: Para obtenção de dados sobre filmes e séries.
- **React Navigation**: Para navegação entre telas.

## Instalação

### Pré-requisitos

- Node.js
- Yarn ou npm
- Expo CLI (opcional, mas recomendado)

### Passos para instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/movie-app.git
   cd movie-app
  

2. **Instale as dependências**

  ```bash
  yarn install
  ```

  ou
  
  ```bash
  npm install
  ```

3. **Configure a API do TMDB**

Crie uma conta no TMDB.
Crie um novo projeto e obtenha sua chave da API.
Adicione sua chave da API no arquivo de configuração (exemplo: .env).
javascript
Copiar código
import API_KEY from "@env"

4. Inicie o aplicativo

```bash
# usando o yarn
yarn start
```

```bash
# usando npm
npm start
```

Você pode usar o Expo Go no seu dispositivo móvel para escanear o QR code ou rodar no simulador.

Estrutura do Projeto
bash
Copiar código
movie-app/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── navigation/       # Configuração de rotas
│   ├── screens/          # Telas do aplicativo
│   ├── service/          # Configuraçôes da api
├── App.js                # Ponto de entrada do aplicativo
└── package.json          # Dependências e scripts

## Contribuição 
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Faça um fork do repositório
Crie uma nova branch (git checkout -b minha-feature)
Faça suas alterações e commit (git commit -m 'Adicionei uma nova feature')
Envie para o branch original (git push origin minha-feature)
Abra um Pull Request
Licença
Esse projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

## Contato
Para mais informações, entre em contato conosco:

Luis: santosluiss2022@gmail.com
Luis-unk
