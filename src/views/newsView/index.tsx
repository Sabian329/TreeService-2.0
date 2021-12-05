import React, { useEffect } from "react";
import { ApiNews } from "../../components/apiNews";

export const NewsView = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div>
      <ApiNews />
    </div>
  );
};
