import * as http from 'http';
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller'
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

//Implementacao do protocolo http através da criação de um server
const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

        //querystring
        const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""]


        if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
            await getListEpisodes(request, response);
        }

        if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
            await getFilterEpisodes(request, response);
        }
    }
);


const port = process.env.PORT


server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}.`)
})