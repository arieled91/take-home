import styled, { css, keyframes } from "styled-components";
import device from "@/helpers/device";

export const HouseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-items: center;
  justify-content: space-evenly;
`;

export const HouseItem = styled.div`
  max-width: 320px;
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 1px solid var(--border-normal);
  box-shadow: var(--shadow-normal) 0 2px 7px 0;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.35) 0 4px 10px 0;
  }

  @media (${device.md}) {
    max-width: none;
  }
`;

export const overflowElipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Address = styled.p`
  color: var(--text-light);
  font-size: 0.95rem;
  margin-top: 0.75rem;
  ${overflowElipsis}
`;

export const Owner = styled.p`
  margin-top: 0.3rem;
  font-size: 0.8rem;
  color: var(--text-light);
  overflow: hidden;
  ${overflowElipsis}
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Description = styled.div`
  padding: 1rem;
`;

const breatheAnimation = keyframes`
 0% { opacity: 100% }
 50% { opacity: 50% }
 100% { opacity: 100% }
`;

export const Skeleton = styled.div`
  height: 320px;
  width: 320px;
  background-color: #cecece;
  animation: ${breatheAnimation} 1.3s infinite;
`;

export const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
