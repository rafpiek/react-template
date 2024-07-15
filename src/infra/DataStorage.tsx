export abstract class DataStorage {
  async get<T>(key: string): Promise<T> {
    console.log({ key })
    throw new Error('Method not implemented.')
  }

  async save(key: string, data: any): Promise<void> {
    console.log({ key, data })
    throw new Error('Method not implemented.')
  }

  storage(): Storage | undefined {
    throw new Error('Method not implemented.')
  }
}
