export default interface IUserData {
  _id: string;
  login: string;
  email: string;
  phone: string;
  active: boolean;
  createdAt: Date;
}
export interface IUserMinimalData {
  email: string;
  phone: string;
}
