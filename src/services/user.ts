import axios from '@/plugins/axios'
import type { UserData, UserLogin } from '@/stores/user.interface'
import { formatDate } from '@/utils/date'
import { AxiosError } from 'axios'

export default class UserApi {
  static async login(payload: UserLogin): Promise<boolean | undefined> {
    try {
      await axios.post('/api/v1/user/login', payload)
      return true
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data.data
      }
      throw err
    }
  }

  static async checkLogin() {
    try {
      await axios.post('/api/v1/user/check-login', {})
      return true
    } catch (err) {
      return false
    }
  }

  static async logout (): Promise<boolean | undefined> {
    try {
      await axios.post('/api/v1/user/logout', {})
      return true
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data.data
      }
      throw err
    }
  }

  static async getProfile (): Promise<UserData | undefined> {
    try {
      const res = await axios.get('/api/v1/user/profile')
      return {
        ...res.data.data,
        ...(res.data.data.dob && { 
          dob: formatDate(res.data.data.dob)
        })
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data.data
      }
      throw err
    }
  }

  static async updateProfile (payload: UserData): Promise<boolean> {
    try {
      await axios.put('/api/v1/user/profile', payload)
      await this.getProfile()
      return true
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data.data
      }
      throw err
    }
  }
}