import React from "react";
import Image from "next/image";
import appLogo from "@/public/logo.png";
import { Logo, Main, Header } from "./styled";

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

export default Layout;
