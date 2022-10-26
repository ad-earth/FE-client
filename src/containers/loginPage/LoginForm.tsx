import * as t from "./LoginForm.style";
import { theme } from "../../style/theme";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { openDB } from "idb";
import { useLoginForm } from "./useLoginForm";
import { MainButton } from "../../elements/buttons/Buttons";
import Input from "../../elements/Input";
import SearchModal from "../../components/modal/searchModal/schModal/SearchModal";

const LoginForm = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const navigate = useNavigate();

  const loginData = {
    u_Id: id,
    u_Pw: pw,
  };

  const setCart = async () => {
    console.log(data.cartList);
    let store;
    const db = await openDB("cart", 1, {
      upgrade(db) {
        store = db.createObjectStore("cart", {
          keyPath: "id",
          autoIncrement: true,
        });
      },
    });
    store = db.transaction("cart", "readwrite").objectStore("cart");
    try {
      for (let i = 0; i < data.cartList.length; i++) {
        store.put({
          id: data.cartList[i].p_No,
          keywordNo: data.cartList[i].k_No,
          prodNo: data.cartList[i].p_No,
          thumbnail: data.cartList[i].p_Thumbnail,
          category: data.cartList[i].p_Category,
          brand: data.cartList[i].a_Brand,
          name: data.cartList[i].p_Name,
          price: data.cartList[i].p_Cost,
          discount: data.cartList[i].p_Discount,
          option: data.cartList[i].p_Option,
          totalPrice: data.cartList[i].p_Price,
          totalCnt: data.cartList[i].p_Cnt,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { mutate, isSuccess, data } = useLoginForm(loginData);

  useEffect(() => {
    if (isSuccess) {
      console.log("Success");
      navigate("/");
      window.location.href = "/";
      setCart();
    }
  }, [isSuccess]);

  const submitId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const submitPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const LoginClick = () => {
    mutate();
  };

  return (
    <>
      <SearchModal
        isOpen={searchIsOpen}
        handleClose={() => setSearchIsOpen(false)}
      />
      <t.LogInWrapper>
        <Input
          holderName="아이디"
          color={theme.fc14}
          value={id}
          onChange={submitId}
        />
        <Input
          holderName="비밀번호"
          color={theme.fc14}
          type="password"
          value={pw}
          onChange={submitPw}
        />
        <t.BtnDiv>
          <MainButton
            radius="30px"
            fontSize={theme.fs14}
            onClick={() => LoginClick()}
          >
            로그인
          </MainButton>
        </t.BtnDiv>
        <t.AddWrapper>
          <Link to={"/signup"}>
            <t.AddInfo>회원가입</t.AddInfo>
          </Link>
          <t.AddInfo onClick={() => setSearchIsOpen(true)}>
            아이디 ∙ 비밀번호 찾기
          </t.AddInfo>
        </t.AddWrapper>
      </t.LogInWrapper>
    </>
  );
};

export default LoginForm;
