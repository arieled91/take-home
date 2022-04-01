import React from "react";
import Image from "next/image";
import appLogo from "@/public/logo.png";
import { Logo, Main, Header, GithubButton } from "./styled";
import { BsGithub } from "react-icons/bs";

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
      <GithubButton
        title="Open Github Repo"
        href="https://github.com/arieled91/take-home"
        target="_blank"
      >
        <BsGithub size={35} fill="white" />
      </GithubButton>
    </Header>
    <Main>{children}</Main>
  </>
);

export default Layout;
