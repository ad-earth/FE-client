import axiosInstance from "./instance";

//마이페이지
export const getOrders = (page: number) =>
  axiosInstance.get(`/orders?page=${page}&maxpost=10`);
export const getOrderDetail = (id: string) =>
  axiosInstance.get(`/orders/${id}`);
export const getCancel = (page: number) =>
  axiosInstance.get(`/cancel-list?page=${page}&maxpost=10`);
export const putCancel = (id: string, p_No: number[]) =>
  axiosInstance.put(`/orders/${id}/cancel`, { p_No });
export const getWishList = (page: number) =>
  axiosInstance.get(`/wish-list?page=${page}&maxpost=12`);
export const putUserInfoChange = (
  u_Name: string,
  u_Address1: string,
  u_Address2: string,
  u_Gender: string,
  u_Phone: string,
  u_Img: string | null
) =>
  axiosInstance.put(`/users`, {
    u_Name,
    u_Address1,
    u_Address2,
    u_Gender,
    u_Phone,
    u_Img,
  });
export const postReviews = (id: number, r_Content: string, r_Score: number) =>
  axiosInstance.post(`/reviews/${id}`, { r_Content, r_Score });
export const deleteUserWithdrawal = () => axiosInstance.delete(`/users`);

//메인페이지
export const getMain = () => axiosInstance.get(`/main`);

//상세페이지
export const getProdDetails = (p_No: string) =>
  axiosInstance.get(`/products/${p_No}`);

//장보기페이지
export const getList = (sort: string, pageNo: string) =>
  axiosInstance.get(`/main/products?sort=${sort}&page=${pageNo}&maxpost=20`);

//카테고리 조회
export const getCate = (category: string, sort: string, pageNo: string) =>
  axiosInstance.get(
    `/main/products/${category}?sort=${sort}&page=${pageNo}&maxpost=20`
  );

//검색페이지
export const getSearch = (keyword: string, pageNo: string) =>
  axiosInstance.get(
    `/main/search?keyword=${keyword}&page=${pageNo}&maxpost=20`
  );

//주문완료 페이지
export const getComplete = () => axiosInstance.get(`/payment/complete`);

//결제페이지
export const getPay = () => axiosInstance.get(`/payment`);

//좋아요버튼
export const postLike = (id: number) => axiosInstance.post(`/wish-list/${id}`);
