export default interface IUserData {
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
