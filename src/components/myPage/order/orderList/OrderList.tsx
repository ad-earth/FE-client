import { useState, SetStateAction, Dispatch } from "react";
import { useNavigate, Link } from "react-router-dom";
//style
import * as t from "./orderList.style";
import { theme } from "../../../../style/theme";
//components
import Product from "../product/Product";
import { MainButton } from "../../../../elements/Buttons";

interface PropsType {
  p_No: number;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
  o_Status: string;
}

const OrderList = ({
  products,
  orderNo,
  // handleClose,
  infoIsOpen,
  setInfoIsOpen,
  setProduct
}: {
  products: PropsType[];
  orderNo?: number;
  infoIsOpen?: boolean;
  setInfoIsOpen?: Dispatch<SetStateAction<boolean>>;
  setProduct?: Dispatch<SetStateAction<PropsType>>;
}) => {
  let navigate = useNavigate();
  // const [product, setProduct] = useState<PropsType>();

  const ClickEvent = (data: PropsType) => {
    setProduct(data);
    setInfoIsOpen(!infoIsOpen);
  };
  return (
    <>
      {products.map((product, idx: number) => (
        <t.OderListBox key={idx}>
          <t.ProductBox>
            <Link to={`${orderNo}`} className="link">
              <Product product={product} />
              <t.Status>{product.o_Status}</t.Status>
            </Link>
          </t.ProductBox>
          <t.ButtonBox>
            {product.o_Status === "주문완료" ? (
              <MainButton
                bgColor="transparent"
                radius="30px"
                border={`1px solid ${theme.rgba08}`}
                hBorder={`1px solid ${theme.ls11}`}
                hBgColor="transparent"
                color={`${theme.fc14}`}
                fontSize={`${theme.fc12}`}
                fontWeight="500"
                padding="10px 16px"
                onClick={() => {
                  navigate(`cancel-call/${orderNo}`, {
                    state: { products: products, orderNo: orderNo },
                    replace: true,
                  });
                }}
              >
                취소
              </MainButton>
            ) : product.o_Status === "배송완료" ? (
              <MainButton
                radius="30px"
                border="1px solid transparent"
                hBorder="1px solid transparent"
                fontSize={`${theme.fs12}`}
                fontWeight="500"
                padding="10px 16px"
                onClick={() => {
                  ClickEvent(product);
                }}
              >
                구매평 작성
              </MainButton>
            ) : (
              <></>
            )}
          </t.ButtonBox>
        </t.OderListBox>
      ))}
    </>
  );
};
export default OrderList;
