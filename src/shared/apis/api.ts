import axiosInstance from "./instance";

//마이페이지
export const getOrders = (page: number) =>
  axiosInstance.get(`/orders?page=${page}&maxpost=10`);
export const getOrderDetail = (id: string) => axiosInstance.get(`/o_No`);
// export const getOrderDetail = (id: number) =>
//   axiosInstance.get(`/orders/${id}`);
export const putCancel = (id: string, body: number[]) =>
  axiosInstance.get(`/putCancel/?${id}${body}`);
// export const putCancel = (id: string, body: number[]) =>
//   axiosInstance.put(`/orders/${id}/cancel`, { body });
export const getCancel = (page: number) =>
  axiosInstance.get(`/cancel?page=${page}&maxpost=10`);
// export const getCancel = (page: number) =>
//   axiosInstance.get(`/orders/cancel?page=${page}&maxpost=10`);
export const getWishList = (page: string, maxpost: string) =>
  axiosInstance.get(`/wish-list?page=${page}&maxpost=${maxpost}`);
export const putUserInfoChange = () => axiosInstance.put(`/users`);
export const deleteUserWithdrawal = () => axiosInstance.delete(`/users`);
export const postReviews = (id: number, body: any) =>
  axiosInstance.get(`/reviews/?${id}`);
// export const postReviews = (id: number, body: object) =>
//   axiosInstance.post(`/reviews/:${id}`);

//메인페이지
export const getMain = () => axiosInstance.get(`/main`);

//장보기페이지
export const getList = () => axiosInstance.get(`/list`);

//검색페이지
export const getSearch = () => axiosInstance.get(`/search`);
