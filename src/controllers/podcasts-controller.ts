import {IncomingMessage, ServerResponse, STATUS_CODES} from 'http'
import {serviceListEpisodes} from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes'
import { StatusCode } from '../utils/status-code'
import { ContentType } from '../utils/content-type'


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes()

    res.writeHead(200, {'Content-Type':ContentType.JSON})
    res.end(
        JSON.stringify(content)
    )
}



export const getFilterEpisodes = async(req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceFilterEpisodes(req.url)

    res.writeHead(StatusCode.OK, {'Content-Type': ContentType.JSON})
    res.end(
        JSON.stringify(content)
    )
}