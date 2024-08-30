# Podcast Manager

### Descricao
Um app ao estilo netflix, onde possa centralizar diferentes episódios de podcasts separados por categoria

### Dominio
Podcasts feitos em vídeo

### Features
- Listar os episodios podcasts em sessoes de categorias
    - Saude, fitness, mentalidade, humor
- Filtra episodios por nome de podcast

## Como

#### Feature:
Listar os episódios podcasts em sessoes de categorias

### Como vou implementar:
Vou retornar em uma api rest(json) o nome podcast, nome do episódio, imagem de capa, link

GET: Retorna a lista de episódios

response:

```js
[
    {
        podcastName: "Flow",
        episode: "CBUM - Flow #319",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["saúde", "bodybuilder"]
    },
    {
        podcastName: "Flow",
        episode: "PABLO MARÇAL - Corrida à Prefeitura de São Paulo 2024",
        cover: "https://i.ytimg.com/vi/1XLBE-qArtE/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=1XLBE-qArtE",
        category: ["política", "coach"]
    },
]
```