import { compare, genSalt, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { model, Schema } from "mongoose";

export interface IUser {
  _id: Schema.Types.ObjectId;
	name: string;
	email: string;
	password: string;
	school: string;
	work: string;
	city: string;
	country: string;

	comparePassword(password: string): Promise<boolean>;
	createJWTToken(): string;
}

const UserSchema = new Schema<IUser>(
	{
		name: { type: String, required: [true, "Please provide name"] },
		email: {
			type: String,
			required: [true, "Please provide email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please provide password"],
			minlength: 3,
			maxLength: 8,
			select: false,
		},
		school: { type: String },
		work: { type: String },
		city: { type: String },
		country: { type: String },
	},
	{ timestamps: true },
);

UserSchema.pre("save", async function () {
	if (!this.isModified("password")) return;
	const salt = await genSalt(10);
	this.password = await hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (password: string) {
  console.log(password, this.password)
	return await compare(password, this.password);
};

UserSchema.methods.createJWTToken = function () {
	return sign({ userId: this._id }, process.env.JWT_SECRET!, {
		expiresIn: "1d",
	});
};

export const User = model<IUser>("User", UserSchema);
