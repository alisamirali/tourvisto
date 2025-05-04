import { Outlet, redirect, useNavigate } from "react-router";

import { RootNavbar } from "components";

const PageLayout = () => {
  return (
    <div className="bg-light-200">
      <RootNavbar />
      <Outlet />
    </div>
  );
};
export default PageLayout;
