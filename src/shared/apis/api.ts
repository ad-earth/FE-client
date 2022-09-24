import axiosInstance from "./instance";

//마이페이지
export const getOrders = (page: string, maxpost: string) =>
  axiosInstance.get(`/orders?page=${page}&maxpost=10`);
export const getOrderDetail = (o_No: string) =>
  axiosInstance.get(`/orders/${o_No}`);
export const putCancel = (o_No: string) =>
  axiosInstance.put(`/orders/cancel?o_No=${o_No}`);
export const getCancelDetail = (page: string, maxpost: string) =>
  axiosInstance.get(`/orders/cancel?page=${page}&maxpost=${maxpost}`);
export const getWishList = (page: string, maxpost: string) =>
  axiosInstance.get(`/wish-list?page=${page}&maxpost=${maxpost}`);
export const putUserInfoChange = (u_Idx: string) =>
  axiosInstance.put(`/users/${u_Idx}`);
export const getUserWithdrawal = (u_Idx: string) =>
  axiosInstance.get(`/users/${u_Idx}`);

//메인페이지
export const getMain = () => axiosInstance.get(`/main`);

//장보기페이지
export const getList = (sort: string, pageNo: string) =>
  axiosInstance.get(`/main/products?sort=${sort}&page=${pageNo}&maxpost=20`);

//카테고리 조회
export const getSort = (category: string, sort: string, pageNo: string) =>
  axiosInstance.get(
    `/main/products/:${category}?sort=${sort}&page=${pageNo}&maxpost=20`
  );

//검색페이지
export const getSearch = (keyword: string, pageNo: string) =>
  axiosInstance.get(
    `/main/search?keyword=${keyword}&page=${pageNo}&maxpost=20`
  );

//좋아요버튼
export const postLike = (id: number) => axiosInstance.post(`/wish-list/${id}`);
