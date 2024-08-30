import  fs from "fs"
import path from "path"
import { PodcastModel } from "../models/podcast-models"







const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repoPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const data = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(data)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: { podcastName: string }) =>podcast.podcastName===podcastName)
    }

    if(podcastName){
        jsonFile = jsonFile.filter((podcast:PodcastModel) => podcast.podcastName === podcastName)
    }
    return jsonFile
}