import axiosInstance from "./instance";

//마이페이지
export const getOrders = (page: number) =>
  axiosInstance.get(`/orders?page=${page}&maxpost=10`);
export const getOrderDetail = (o_No: string) =>
  axiosInstance.get(`/orders/${o_No}`);
export const putCancel = (o_No: string) =>
  axiosInstance.put(`/orders/cancel?o_No=${o_No}`);
export const getCancel = (page: number) =>
  axiosInstance.get(`/cancel?page=${page}&maxpost=10`);
// export const getCancel = (page: number) =>
//   axiosInstance.get(`/orders/cancel?page=${page}&maxpost=10`);
export const getWishList = (page: string, maxpost: string) =>
  axiosInstance.get(`/wish-list?page=${page}&maxpost=${maxpost}`);
export const putUserInfoChange = () => axiosInstance.put(`/users`);
export const deleteUserWithdrawal = () => axiosInstance.delete(`users`);

//메인페이지
export const getMain = () => axiosInstance.get(`/main`);

//장보기페이지
export const getList = () => axiosInstance.get(`/list`);

//검색페이지
export const getSearch = () => axiosInstance.get(`/search`);
