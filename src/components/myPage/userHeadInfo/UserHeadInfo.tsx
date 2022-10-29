import * as t from "./userHeadInfo.style";
import Avatar from "@mui/material/Avatar";
import { useAppSelector } from "../../../redux/store";
import { useViewport } from "../../../hooks/useViewport";
import { useState } from "react";
import UserInfoModal from "../../modal/userInfoModal/UserInfoModal";

const UserHeadInfo = () => {
  const viewport = useViewport();
  const userData = useAppSelector((store) => store.userSlice.userData);
  const userName = userData?.u_Name;
  const userImg = userData?.u_Img;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달
  console.log(userData);
  return (
    <>
      {/* 리뷰모달  */}
      <UserInfoModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
      <t.UserBox>
        <t.UserImg>
          <Avatar
            sx={
              viewport <= 990
                ? { width: 56, height: 56 }
                : { width: 85, height: 85 }
            }
            src={`${userImg ? userImg : "/broken-image.jpg"}`}
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
        </t.UserImg>
        <t.UserName>
          안녕하세요 <strong>{userName}님</strong>
          <br />
          오늘도 같이 지구를 살려봅시다 🌍
        </t.UserName>
      </t.UserBox>
    </>
  );
};
export default UserHeadInfo;
