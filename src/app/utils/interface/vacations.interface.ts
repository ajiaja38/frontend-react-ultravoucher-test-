export interface IVacation {
  _id: string;
  id: string;
  name: string;
  address: string;
  description: string;
  latitude: string;
  longitude: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IAddVacation {
  name: string;
  address: string;
  description: string;
  latitude: string;
  longitude: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}
