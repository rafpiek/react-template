export type User = {
	id: string
	email: string
}
export class FakeUser implements User{
	id: string;
	email: string;
	
	constructor(id: string, email: string) {
		this.id = id;
		this.email = email;
	}
	
	static build() {
		return new FakeUser('1', 'fakeuser@email.com')
	}
}
