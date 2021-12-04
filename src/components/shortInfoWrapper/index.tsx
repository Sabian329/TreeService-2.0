import React from "react";
import { ShortInfo } from "../../constans/ShortInfo";
import { ShortInfoItem } from "../shortInfoItem";
import { Wrapper } from "./styled";

export const ShortInfoWrapper = () => {
  return (
    <Wrapper>
      {ShortInfo.map((item) => (
        <ShortInfoItem {...item} key={item.title} />
      ))}
    </Wrapper>
  );
};
