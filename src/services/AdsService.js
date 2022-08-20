import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { bcwSandboxServer } from "./AxiosService";

class AdsService {

    async getAds() {
        const res = await bcwSandboxServer.get('api/ads')
        logger.log("logging ads from Service", res.data)
        AppState.ads = res.data 
    }
}

export const adsService = new AdsService()