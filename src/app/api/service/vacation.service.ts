import { IAddVacation } from "../../utils/interface/vacations.interface";
import API_ENDPOINT from "../global";
import api from "../global/config";

const { VACATION, VACATION_PAGINATION, VACATION_BY_ID, DELETE_VACATION_BY_ID } =
  API_ENDPOINT;

export default class VacationService {
  static async createVacationHandler(data: IAddVacation) {
    const response = await api.post(VACATION, data);
    return response.data;
  }

  static async getAllVacationHandler() {
    const response = await api.get(VACATION);
    return response.data;
  }

  static async getAllVacationHandlerPaginate(
    page: number,
    limit: number,
    search: string
  ) {
    const response = await api.get(VACATION_PAGINATION(page, limit, search));
    return response.data;
  }

  static async getVacationByIdHandler(id: string) {
    const response = await api.get(VACATION_BY_ID(id));
    return response.data;
  }

  static async updateVacationHandler(
    id: string,
    data: {
      name: string;
      address: string;
      description: string;
      latitude: number;
      longitude: number;
    }
  ) {
    const response = await api.put(VACATION_BY_ID(id), data);
    return response.data;
  }

  static async deleteVacationHandler(id: string) {
    const response = await api.delete(DELETE_VACATION_BY_ID(id));
    return response.data;
  }
}
