import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Colors } from "../../theme/Colors";
import { device } from "../../theme/MediaQueries";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #a7a7a7;
  font-size: 1rem;
  font-weight: 200;
  margin: 1rem;

  &.active {
    color: ${Colors.green};
  }
  @media ${device.laptop} {
    margin: 0.5rem;
  }
`;

export const Wrapper = styled.nav`
  display: flex;
  @media ${device.mobileLL} {
    flex-direction: column;
  }
`;
