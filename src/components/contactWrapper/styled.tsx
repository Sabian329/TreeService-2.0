import { Heading } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import { device, size } from "../../theme/MediaQueries";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  max-width: ${size.laptop};
`;
export const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65rem;
  max-width: ${size.laptop};
  border-radius: 10px;
  margin-bottom: 5rem;

  p {
    font-size: 1.2rem;
    text-align: justify;
    margin: 1rem 2rem 1rem 2rem;
  }
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: ;
  flex-direction: column;
  width: 22rem;
  height: 35rem;
  padding: 0 1rem 0 1rem;
  background-color: #008000;
  border-radius: 10px;
  position: relative;
  @media ${device.laptop} {
    height: auto;
    padding: 2rem;
  }
  @media ${device.mobileL} {
    width: 100vw;
    border-radius: unset;
  }

  h2 {
    position: absolute;
    top: 3rem;
    right: 0;
    left: 0;
    font-weight: 300;
    text-align: center;
    @media ${device.laptop} {
      position: unset;
    }
  }
  table {
    margin: 0 auto;
    height: 10rem;
  }
  th {
    height: 1rem;
  }
  tr {
    text-align: left;
  }
  td {
    height: 3rem;

    color: #ffffff;
    cursor: pointer;
    font-size: 1.1rem;
    @media ${device.mobileL} {
      font-size: 1rem;
    }
    :hover {
      color: #a5a5a5;
    }
  }
  img {
    width: 1.2rem;
    margin: 0 1rem 0 0;
    filter: invert(100%);
  }
`;
export const HeadingStyled = styled(Heading)`
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
`;
