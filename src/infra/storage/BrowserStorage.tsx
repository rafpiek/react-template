export class BrowserStorage {
	async get<T>(key: string): Promise<T> {
		const data = this.storage()?.getItem(key)
		return data ? JSON.parse(data) : null
	}
	
	async save(key: string, data: any): Promise<void> {
		this.storage()?.setItem(key, JSON.stringify(data))
	}
	
	storage(): Storage | undefined {
		if (typeof window !== 'undefined') {
			return localStorage
		}
	}
}
