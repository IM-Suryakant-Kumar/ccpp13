interface IUser {
  _id: string;
	name: string;
	email: string;
	password: string;
	school: string;
	work: string;
	city: string;
	country: string;
}

interface INote {
  _id: string;
  user: string;
	content: string;
}

interface SuccessResponse {
	message?: string;
	token?: string;
	user?: IUser;
	notes?: INote[];
}
