import axios, { AxiosInstance, AxiosResponse } from 'axios'

interface IHttpClient {
  client: AxiosInstance
}

export class HttpClient {
  private readonly client: AxiosInstance

  constructor({ client }: IHttpClient) {
    this.client = client
  }

  async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get<T>(url, { params })
    return response.data
  }

  async post<T>(url: string, body: Record<string, unknown>): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post<T>(url, body)
    return response.data
  }

  static async put<T>(url: string, body: Record<string, unknown>): Promise<T> {
    const response: AxiosResponse<T> = await axios.put<T>(url, body)
    return response.data
  }

  static async delete(url: string) {
    await axios.delete(url)
  }
}
