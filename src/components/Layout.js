import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import Footer from "./Footer";
import Menu from "./Menu";

function Layout({ children }) {
  const locate = useLocation();
  const [isopen, setIsopen] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (locate.pathname === "/") {
      setIsHome(true);
    } else {
      window.scrollTo(0, 0);
    }
  }, [isHome, locate]);

  const handleClick = useCallback(() => {
    setIsopen(!isopen);
  }, [isopen]);

  return (
    <>
      <Menu isopen={isopen} handleClick={handleClick} />
      {children}
      {!isHome ? <Footer /> : null}
    </>
  );
}

export default Layout;
