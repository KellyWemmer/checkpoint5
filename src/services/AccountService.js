import { AppState } from '../AppState'
import { Account } from '../models/Account'
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

  async editAccount(accountData) {
    const res = await bcwSandboxServer.put('account', accountData)
    logger.log(res.data)
    AppState.account = new Account(res.data)
  }
}

export const accountService = new AccountService()
