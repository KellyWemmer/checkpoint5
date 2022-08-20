import { AppState } from "../AppState"
import { Profile } from "../models/Profile"
import { logger } from "../utils/Logger"
import { bcwSandboxServer } from "./AxiosService"

class ProfilesService {
    async getProfileById(id) {
        const res = await bcwSandboxServer.get(`api/profiles/${id}`)
        logger.log("Getting profiles from service", res.data)
        AppState.activeProfile = new Profile(res.data);
    }     
    
}

export const profilesService = new ProfilesService()