import { Outlet } from "react-router-dom";
import Aside from "../containers/mypage/Aside";
import UserHead from "../containers/mypage/UserHead";

const MyPage = () => {
  return (
    <div className="Wrap">
      <Aside />
      <>
        <UserHead />
        <Outlet />
      </>
    </div>
  );
};
export default MyPage;
