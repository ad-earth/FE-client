import { Outlet } from "react-router-dom";
import Aside from "../containers/myPage/Aside";
import UserHead from "../containers/myPage/UserHead";

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
