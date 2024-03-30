const API_ENDPOINT = {
  LOGIN: "auth/login",
  REFRESH_TOKEN: "auth/refresh-token",
  LOGOUT: "auth/logout",
  REGISTER_USER: "user",
  REGISTER_ADMIN: "user/admin",
  GET_ALL_USERS: (page: number, limit: number, search: string) =>
    `user?page=${page}&limit=${limit}&search=${search}`,
  USER_BY_ID: (id: string) => `user/${id}`,
  VACATION: "vacation",
  VACATION_PAGINATION: (page: number, limit: number, search: string) =>
    `vacation?page=${page}&limit=${limit}&search=${search}`,
  VACATION_BY_ID: (id: string) => `vacation/${id}`,
};

export default API_ENDPOINT;
