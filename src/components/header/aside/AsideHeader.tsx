import * as t from "./asideHeader.style";
import { theme } from "../../../style/theme";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/store";
import { AsideType } from "./asideHeader.type";
import useDropDown from "../../../hooks/useDropDown";
import MenuDrop from "../../../elements/menuDrop/MenuDrop";
import UserInfoModal from "../../modal/userInfoModal/UserInfoModal";

let category: {
  id: number;
  cate: string;
  path: string;
}[] = [
  { id: 1, cate: "전체", path: "/list/전체" },
  { id: 2, cate: "욕실", path: "/list/욕실" },
  { id: 3, cate: "주방", path: "/list/주방" },
  { id: 4, cate: "음료용품", path: "/list/음료용품" },
  { id: 5, cate: "생활", path: "/list/생활" },
  { id: 6, cate: "식품", path: "/list/식품" },
  { id: 7, cate: "화장품", path: "/list/화장품" },
  { id: 8, cate: "문구", path: "/list/문구" },
];

let data: {
  id: number;
  cate: string;
  path: string;
}[] = [
  { id: 1, cate: "마이페이지", path: "/mypage" },
  { id: 2, cate: "장바구니", path: "/cart" },
  { id: 3, cate: "주문배송", path: "/mypage" },
  { id: 4, cate: "위시리스트", path: "/mypage" },
  { id: 5, cate: "로그아웃", path: "/" },
];

const AsideHeader = (props: AsideType) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { isDropped, dropRef, handleRemove } = useDropDown();
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  //   useEffect(()=>{
  // if(userInfo){
  //   const u_Name = userInfo.u_Name;
  //   const u_Img = userInfo.u_Img;
  //   const u_Id = userInfo.u_Id;
  // }
  //   },[userInfo])
  // const userName = useAppSelector((state) => state.userSlice.userData.u_Name);
  // const userId = useAppSelector((state) => state.userSlice.userData.u_Id);

  return (
    <>
      <UserInfoModal
        isOpen={infoIsOpen}
        handleClose={() => setInfoIsOpen(false)}
      />
      {props.isOpen && (
        <>
          <t.AsideContainer>
            <t.ContentBox>
              <t.ContentTop ref={dropRef}>
                <div
                  onClick={() => {
                    setInfoIsOpen(true);
                    props.handleClose();
                  }}
                >
                  <t.UserImg src={userInfo?.u_Img ? userInfo.u_Img : ""} />
                  <span>
                    <strong>{userInfo?.u_Name ? userInfo.u_Name : ""}</strong>{" "}
                    {userInfo?.u_Id ? `[${userInfo.u_Id}]` : ""}
                  </span>
                </div>
                <t.EtcIcon onClick={handleRemove} />
                <MenuDrop
                  isDropped={isDropped}
                  cateData={data}
                  width="140px"
                  top="80px"
                  left="82%"
                  radius="5px"
                  fcColor={theme.fc10}
                  bgColor={theme.bg01}
                />
              </t.ContentTop>
              <t.ContentBot>
                <ul>
                  {category.map((val, i: number) => (
                    <a href={val.path}>
                      <li key={i}>{val.cate}</li>
                    </a>
                  ))}
                </ul>
              </t.ContentBot>
            </t.ContentBox>
            <t.AsideBackdrop
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                props.handleClose();
              }}
            ></t.AsideBackdrop>
          </t.AsideContainer>
        </>
      )}
    </>
  );
};

export default AsideHeader;
