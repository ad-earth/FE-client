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
export const getList = () => axiosInstance.get(`/list`);

//검색페이지
export const getSearch = () => axiosInstance.get(`/search`);

//회원가입페이지
export const postSignup = (
  u_Id: string,
  u_Pw: string,
  u_Name: string,
  u_Address1: string,
  u_Address2: string,
  u_Address3: string,
  u_Gender: string,
  u_Phone: string,
  u_Img: string
) =>
  axiosInstance.post(`/users/register`, {
    u_Id,
    u_Pw,
    u_Name,
    u_Address1,
    u_Address2,
    u_Address3,
    u_Gender,
    u_Phone,
    u_Img,
  });
