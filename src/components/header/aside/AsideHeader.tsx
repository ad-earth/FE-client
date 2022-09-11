import * as t from "./AsideHeader.style";
import { useEffect, useState } from "react";
import MenuDrop from "../../../elements/MenuDrop";
import useDropDown from "../../../hooks/useDropDown";
import { theme } from "../../../style/theme";
import UserInfoModal from "../../modal/userInfoModal/UserInfoModal";

interface AsideType {
  isOpen: boolean;
  handleClose: () => void;
}

let category: {
  id: number;
  cate: string;
  path: string;
}[] = [
  { id: 1, cate: "전체", path: "" },
  { id: 2, cate: "욕실", path: "" },
  { id: 3, cate: "주방", path: "" },
  { id: 4, cate: "음료용품", path: "" },
  { id: 5, cate: "생활", path: "" },
  { id: 6, cate: "식품", path: "" },
  { id: 7, cate: "화장품", path: "" },
  { id: 8, cate: "문구", path: "" },
];

let data: {
  id: number;
  cate: string;
  path: string;
}[] = [
  { id: 1, cate: "마이페이지", path: "" },
  { id: 2, cate: "장바구니", path: "" },
  { id: 3, cate: "주문배송", path: "" },
  { id: 4, cate: "위시리스트", path: "" },
  { id: 5, cate: "로그아웃", path: "" },
];

const AsideHeader = (props: AsideType) => {
  const { isDropped, dropRef, handleRemove } = useDropDown();
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <>
      <UserInfoModal
        isOpen={infoIsOpen}
        handleClose={() => setInfoIsOpen(false)}
      />
      {props.isOpen && (
        <>
          <t.AsideContainer>
            <t.ContentBox ref={dropRef}>
              <t.ContentTop>
                <div
                  onClick={() => {
                    setInfoIsOpen(true);
                    props.handleClose();
                  }}
                >
                  <t.UserImg src="" />
                  <span>
                    <strong>이담</strong> [ddam2lee]
                  </span>
                </div>
                <t.EtcIcon onClick={handleRemove} />
                <MenuDrop
                  isDropped={isDropped}
                  data={data}
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
                      <li key={val.id}>{val.cate}</li>
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
