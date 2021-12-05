import styled from "@emotion/styled";

import { device, size } from "../../theme/MediaQueries";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  color: white;
  max-width: ${size.laptop};

  h2 {
    font-weight: 300;
    margin: 2rem;
    width: 64rem;
    background-color: green;
    padding: 0.8rem;
    border-radius: 10px;
    @media ${device.laptop} {
      width: 30rem;
    }
    @media ${device.mobileL} {
      width: 100vw;
      text-align: center;
      border-radius: unset;
    }
  }
`;
export const First = styled.article`
  background-color: #3f3f3f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65rem;
  max-width: ${size.laptop};
  border-radius: 10px;
  margin-bottom: 2rem;
  @media ${device.laptop} {
    width: 30rem;
    flex-direction: column;
  }
  @media ${device.mobileL} {
    width: 100vw;
    border-radius: unset;
  }

  p {
    font-size: 1.1rem;
    text-align: justify;
    margin: 1rem 2rem 1rem 2rem;
  }
  img {
    height: 19rem;
    border-radius: 0 10px 10px 0;
    @media ${device.laptop} {
      height: unset;
      border-radius: 0 0 10px 10px;
    }
    @media ${device.mobileL} {
      border-radius: unset;
    }
  }
`;

export const Second = styled.article`
  background-color: #3f3f3f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65rem;
  max-width: ${size.laptop};
  border-radius: 10px;
  margin-bottom: 2rem;
  @media ${device.laptop} {
    width: 30rem;
    flex-direction: column;
  }
  @media ${device.mobileL} {
    width: 100vw;
    border-radius: unset;
  }

  p {
    font-size: 1.1rem;
    text-align: justify;
    margin: 1rem 2rem 1rem 2rem;
  }
  img {
    height: 19rem;
    border-radius: 0 10px 10px 0;
    @media ${device.laptop} {
      height: unset;
      border-radius: 0 0 10px 10px;
    }
    @media ${device.mobileL} {
      border-radius: unset;
    }
  }
`;
