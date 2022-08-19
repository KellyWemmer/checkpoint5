import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { bcwSandboxServer } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await bcwSandboxServer.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const accountService = new AccountService()
