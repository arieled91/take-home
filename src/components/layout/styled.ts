import styled from "styled-components";
import device from "@/helpers/device";

export const Main = styled.main`
  max-width: 1400px;
  margin: 90px auto;

  @media (${device.md}) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #1c1c1c;
  box-shadow: 0 2px 9px -4px #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  position: relative;
  width: 120px;
  filter: invert(100%) brightness(120%);
`;
