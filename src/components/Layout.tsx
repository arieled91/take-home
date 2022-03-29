import React from "react";
import styled from "styled-components";
import device from "../helpers/device";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Main>{children}</Main>
  </>
);

const Main = styled.main`
  max-width: 1400px;
  margin: auto;

  @media (${device.md}) {
    padding: 1rem;
  }
`;

export default Layout;
