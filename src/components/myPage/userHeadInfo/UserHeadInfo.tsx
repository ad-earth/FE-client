import { useState } from "react";
import * as t from "./userHeadInfo.style";
import { UserInfoType } from "./userHeadInfo.type";
import { useViewport } from "../../../hooks/useViewport";
import { useAppSelector } from "../../../redux/store";
import UserInfoModal from "../../modal/userInfoModal/UserInfoModal";

export default function UserHeadInfo() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const viewport = useViewport();
  // const { u_Name, u_Img }: UserInfoType = useAppSelector(
  //   (store) => store.userSlice.userData
  // );
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // const u_Name: string = userInfo.u_Name;
  // const u_Img: string = userInfo.u_Img;

  const modal = isModalOpen && (
    <UserInfoModal
      isOpen={isModalOpen}
      handleClose={() => setIsModalOpen(false)}
    />
  );

  return (
    <t.Section>
      {modal}
      <t.Container>
        <t.AvatarImg
          sx={
            viewport <= 990
              ? { width: 56, height: 56 }
              : { width: 85, height: 85 }
          }
          src={`${userInfo?.u_Img ? userInfo.u_Img : "/broken-image.jpg"}`}
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
        <t.UserName>
          안녕하세요 <strong>{userInfo?.u_Name}님</strong>
          <br />
          오늘도 같이 지구를 살려봅시다 🌍
        </t.UserName>
      </t.Container>
    </t.Section>
  );
}
