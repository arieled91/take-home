import React from "react";
import { Icon, Message, MessageContainer } from "./styled";
import { IoMdInformationCircleOutline } from "react-icons/io";

const InfoMessage = ({ children }: { children: React.ReactNode }) => (
  <MessageContainer>
    <Message>
      <Icon>
        <IoMdInformationCircleOutline size={20} />
      </Icon>
      <span>{children}</span>
    </Message>
  </MessageContainer>
);

export default InfoMessage;
