import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currenPath, setCurrenPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrenPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currenPath === path ? children : null;
};

export default Route;
