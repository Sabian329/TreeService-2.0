import React from "react";
import { ShortInfo } from "../../constans/shortInfo";
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
