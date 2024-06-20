import { Result } from "infra/Result"
import { BrowserStorage } from "infra/storage/BrowserStorage.tsx";



export type AuthStatus = {
  isLoggedIn: boolean
  token?: string
}



export class AuthRepository {
  static KEY = "auth"
  private readonly storage: BrowserStorage

  constructor() {
    this.storage = new BrowserStorage()
  }

  async fetch<AuthStatus>(): Promise<Result<AuthStatus>> {
    const data: AuthStatus = await this.storage.get<AuthStatus>(AuthRepository.KEY)
    const defaultStatus = { isLoggedIn: false } as AuthStatus
    return Result.ok(data || defaultStatus)
  }

  async save(data: AuthStatus): Promise<Result<AuthStatus>> {
    await this.storage.save(AuthRepository.KEY, data)

    return Result.ok(data)
  }

}
