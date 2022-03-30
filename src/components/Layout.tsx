import React from "react";
import styled from "styled-components";
import device from "../helpers/device";
import Image from "next/image";
import appLogo from "@/public/logo.png";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header>
      <Logo>
        <Image
          src={appLogo}
          alt="Home Vision"
          width={120}
          height={35}
          objectFit="contain"
        />
      </Logo>
    </Header>
    <Main>{children}</Main>
  </>
);

const Main = styled.main`
  max-width: 1400px;
  margin: 90px auto;

  @media (${device.md}) {
    padding: 1rem;
  }
`;

const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid var(--border-light);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--bg-color);
  box-shadow: 0 2px 9px -4px var(--shadow-normal);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  position: relative;
  width: 120px;
`;

export default Layout;
