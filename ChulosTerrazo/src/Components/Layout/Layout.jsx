import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { LayoutWrapper } from "./LayoutStyles";

export const Layout = ({ children }) => {
  // const dispatch = useDispatch();
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (!hiddenMenu) {
  //     dispatch(toggleMenuHidden());
  //   }
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
