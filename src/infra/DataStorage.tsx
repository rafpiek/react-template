export abstract class DataStorage {
	async get<T>(key: string): Promise<T> {
		throw new Error("Method not implemented.")
	}
	
	async save(key: string, data: any): Promise<void> {
		throw new Error("Method not implemented.")
	}
	
	storage(): Storage | undefined {
		throw new Error("Method not implemented.")
	}
}
