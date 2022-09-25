import axiosInstance from "./instance";

//마이페이지
export const getOrders = (page: number) =>
  axiosInstance.get(`/orders?page=${page}&maxpost=10`);
export const getOrderDetail = (id: string) =>
  axiosInstance.get(`/orders/${id}`);
export const putCancel = (id: string, body: number[]) =>
  axiosInstance.put(`/orders/${id}/cancel`, { body });
export const getCancel = (page: number) =>
  axiosInstance.get(`/cancel-list?page=${page}&maxpost=10`);
export const getWishList = (page: number) =>
  axiosInstance.get(`/wish-list?page=${page}&maxpost=12`);
export const putUserInfoChange = () => axiosInstance.put(`/users`);
export const deleteUserWithdrawal = () => axiosInstance.delete(`/users`);
export const postReviews = (id: number, body: any) =>
  axiosInstance.get(`/reviews/?${id}`);
// export const postReviews = (id: number, body: object) =>
//   axiosInstance.post(`/reviews/:${id}`);

//메인페이지
export const getMain = () => axiosInstance.get(`/main`);

//상세페이지
export const getProdDetails = (p_No?: string, keyword?: string) =>
  axiosInstance.get(`/products/:${p_No}?keyword=${keyword}`);

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
