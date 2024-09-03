import { PodcastTransferModel } from "../models/filter-podcast-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    

    const data = await repoPodcast()
        //Define a interface de retorno
        let responseFormat: PodcastTransferModel = {
            statusCode: 0,
            body: [],
        };

        //Verifico se tem conteúdo
        responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

        responseFormat.body = data
        
        return data;
    }
    