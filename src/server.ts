import * as http from 'http';
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller'
import { Routes } from './routes/routes';

//Implementacao do protocolo http através da criação de um server
const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        //querystring
        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""]


        if(req.method === "GET" && baseUrl === Routes.LIST){
            await getListEpisodes(req, res);
        }

        if(req.method === "GET" && baseUrl === Routes.EPISODE){
            await getFilterEpisodes(req, res);
        }
    }
);


const port = process.env.PORT


server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}.`)
})