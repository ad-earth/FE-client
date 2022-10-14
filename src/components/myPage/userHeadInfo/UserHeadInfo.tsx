import * as t from "./userHeadInfo.style";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";

const userName = window.localStorage.getItem("u_Name");

const UserHeadInfo = () => {
  const isMobile = useMediaQuery("(max-width: 990px)");
  return (
    <t.UserBox>
      <t.UserImg>
        <Avatar
          sx={isMobile ? { width: 56, height: 56 } : { width: 85, height: 85 }}
          src="/broken-image.jpg"
        />
      </t.UserImg>
      <t.UserName>
        안녕하세요 <strong>{userName}님</strong>
        <br />
        오늘도 같이 지구를 살려봅시다 🌍
      </t.UserName>
    </t.UserBox>
  );
};
export default UserHeadInfo;
