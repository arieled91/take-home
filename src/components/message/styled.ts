import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const Message = styled.div`
  padding: 1.5rem;
  min-width: 50%;
  max-width: 500px;
  background-color: #c8e7ff;
  color: #002848;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
`;

export const Icon = styled.div`
  margin-right: 10px;
`;
