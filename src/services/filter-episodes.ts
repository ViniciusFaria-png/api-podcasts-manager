import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined) :  Promise <PodcastTransferModel> => {

    //Define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    //Buscando os dados
    const queryString = podcastName?.split("?p=")[1]  || ""
    const data = await repoPodcast(queryString);


    //Verifico se tem conteúdo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    responseFormat.body = data

    return responseFormat
}