
# Podcast Manager

## Descrição

O **Podcast Manager** é um aplicativo ao estilo Netflix, projetado para centralizar e organizar diferentes episódios de podcasts em vídeo. Os episódios são classificados em categorias como saúde, fitness, mentalidade, e humor, permitindo que os usuários explorem e filtrem facilmente o conteúdo que desejam assistir.

## Features

- **Listar Episódios de Podcasts**: 
  - Exibe os episódios de podcasts organizados em sessões de categorias como saúde, fitness, mentalidade e humor.
- **Filtrar Episódios por Nome de Podcast**:
  - Permite a filtragem dos episódios com base no nome do podcast.

## Como Funciona

### Listar os Episódios de Podcasts em Sessões de Categorias

**Implementação:**

A funcionalidade de listar episódios é implementada através de uma API REST que retorna as informações necessárias em formato JSON. Cada episódio inclui o nome do podcast, o nome do episódio, uma imagem de capa, e um link para o episódio.

**Exemplo de Resposta da API:**

```json
[
    {
        "podcastName": "Flow",
        "episode": "CBUM - Flow #319",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "category": ["saúde", "bodybuilder"]
    },
    {
        "podcastName": "Flow",
        "episode": "PABLO MARÇAL - Corrida à Prefeitura de São Paulo 2024",
        "cover": "https://i.ytimg.com/vi/1XLBE-qArtE/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=1XLBE-qArtE",
        "category": ["política", "coach"]
    }
]
```
### Filtrar episódios por nome de podcast

- **Endpoint** `GET /episode?podcastName={nome}`
- **Descrição** Retorna uma lista de episódios de podcast com base no nome do podcast fornecido.
- **Exemplo de requisição** `GET /episode?podcastName=Flow`

## Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução para JavaScript no lado do servidor.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática ao código.
- **[tsx](https://github.com/esbuild-kit/tsx)**: Um runtime para Node.js que suporta TypeScript e transpila em tempo de execução.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: Definições de tipos para Node.js, que permitem o uso de tipagem estática com TypeScript.
- **[tsup](https://tsup.egoist.dev/)**: Empacotador de código TypeScript, que facilita a criação de pacotes prontos para produção.

---

## Como Utilizar
1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `start:dev`.
4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova feature'`.
4. Envie para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Este `README` proporciona uma visão clara do que o projeto faz, como funciona, e como outros podem contribuir.