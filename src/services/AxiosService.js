import Axios from 'axios'
import { baseURL } from '../env'
export const bcwSandboxServer = Axios.create({
  baseURL,
  timeout: 8000
})
