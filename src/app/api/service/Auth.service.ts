import API_ENDPOINT from "../global";
import api from "../global/config";

const { LOGIN, REFRESH_TOKEN, LOGOUT } = API_ENDPOINT;

class AuthService {
  static async loginHandler(data: { email: string; password: string }) {
    const response = await api.post(LOGIN, data);
    return response.data;
  }

  static async refreshTokenHandler() {
    const response = await api.put(REFRESH_TOKEN, {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    return response.data;
  }

  static async logoutHandler() {
    const response = await api.delete(LOGOUT, {
      data: {
        refreshToken: localStorage.getItem("refreshToken"),
      },
    });
    return response.data;
  }
}

export default AuthService;
