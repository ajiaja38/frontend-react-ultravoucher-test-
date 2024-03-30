import { IRegisterUser } from "../../utils/interface/vacations.interface";
import API_ENDPOINT from "../global";
import api from "../global/config";

const { REGISTER_USER, REGISTER_ADMIN, GET_ALL_USERS, USER_BY_ID } =
  API_ENDPOINT;

class UserService {
  static async registerUserHandler(data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
  }) {
    const response = await api.post(REGISTER_USER, data);
    return response.data;
  }

  static async registerAdminHandler(data: IRegisterUser) {
    const response = await api.post(REGISTER_ADMIN, data);
    return response.data;
  }

  static async getAllUsersHandler(page: number, limit: number, search: string) {
    const response = await api.get(GET_ALL_USERS(page, limit, search));
    return response.data;
  }

  static async getUserByIdHandler(id: string) {
    const response = await api.get(USER_BY_ID(id));
    return response.data;
  }

  static async updateUserHandler(
    id: string,
    data: { name: string; email: string; phone: string }
  ) {
    const response = await api.put(USER_BY_ID(id), data);
    return response.data;
  }

  static async deleteUserHandler(id: string) {
    const response = await api.delete(USER_BY_ID(id));
    return response.data;
  }
}

export default UserService;
