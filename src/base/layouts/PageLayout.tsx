import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div>
      <h1>Page Layout</h1>
      <Outlet />
    </div>
  );
};

export default PageLayout;
