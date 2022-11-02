import axiosInstance from "./instance";
import { PayProductsData } from "../../containers/paymentPage/orderPList/orderPList.type";
import { CartType } from "../types/types";
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
  u_Address3: string,
  u_Gender: string,
  u_Phone: string,
  u_Img: string
) =>
  axiosInstance.put(`/users`, {
    u_Name,
    u_Address1,
    u_Address2,
    u_Address3,
    u_Gender,
    u_Phone,
    u_Img,
  });
export const postReviews = (id: number, r_Content: string, r_Score: number) =>
  axiosInstance.post(`/reviews/${id}`, { r_Content, r_Score });
export const deleteUserWithdrawal = () => axiosInstance.delete(`/users`);

// 메인페이지 메인 상품 조회
export const getMain = () => axiosInstance.get(`/main`);

// 상세페이지 상품 상세 정보 조회
export const getDetails = (productNo: string, keyword?: string) =>
  axiosInstance.get(`/products/${productNo}?keyword=${keyword}`);

// 상세페이지 구매평 조회
export const getReviews = (productNo: string, page: number) =>
  axiosInstance.get(`/reviews/${productNo}?page=${page}&maxpost=10`);

// 상세페이지 구매평 삭제
export const deleteReview = (reviewNo: number) =>
  axiosInstance.delete(`/reviews/${reviewNo}`);

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

//주문완료 페이지
export const getComplete = () => axiosInstance.get(`/payment/complete`);

//결제페이지
export const getPay = () => axiosInstance.get(`/payment`);
export const postPay = (
  d_No: number, // 신규 배송지면 0
  d_Name: string,
  d_Phone: string,
  d_Address1: string,
  d_Address2: string,
  d_Address3: string,
  d_Memo: string,
  products: PayProductsData[],
  o_Price: number
) =>
  axiosInstance.post(`/payment/complete`, {
    address: {
      d_No,
      d_Name,
      d_Phone,
      d_Address1,
      d_Address2,
      d_Address3,
      d_Memo,
    },
    products: products,
    o_Price,
  });
export const deletePay = (dNo: string) =>
  axiosInstance.delete(`/shipping-list/${dNo}`);
//좋아요버튼
export const postLike = (id: number) => axiosInstance.post(`/wish-list/${id}`);

//로그인페이지
export const postLogin = (u_Id: string, u_Pw: string) =>
  axiosInstance.post(`/users/login`, { u_Id, u_Pw });

//아이디 찾기
export const getId = (u_Name: string, u_Phone: string) =>
  axiosInstance.get(`/users/find-id`, {
    params: { u_Name, u_Phone },
  });

//비밀번호 찾기 1차
export const getPw = (u_Id: string, u_Name: string, u_Phone: string) =>
  axiosInstance.get(`/users/find-password`, {
    params: { u_Id, u_Name, u_Phone },
  });

//비밀번호 찾기 2차
export const putNewPw = (u_Idx: number, u_Pw: string) => {
  axiosInstance.put(`/users/reset-password`, { u_Idx, u_Pw });
};

//로그아웃시 서버 데이터 전달
export const postCartData = (cartList: CartType) =>
  axiosInstance.post(`/carts`, {
    cartList: cartList,
  });
