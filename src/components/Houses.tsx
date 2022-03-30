import Image from "next/image";
import { currency } from "@/helpers/formatter";
import styled, { css, keyframes } from "styled-components";
import { House } from "@/model/house";
import device from "@/helpers/device";

type Props = {
  houses: House[];
  loading?: boolean;
};

const Houses = ({ houses, loading = false }: Props) => (
  <div>
    <HouseList>
      {houses?.map((house) => (
        <HouseItem key={house.id}>
          <Image
            src={house.photoURL}
            height={245}
            width={400}
            alt="house photo"
            objectFit="cover"
          />
          <Description>
            <Price>{currency.format(house.price)}</Price>
            <Address title={house.address}>{house.address}</Address>
            <Owner>owned by {house.homeowner}</Owner>
          </Description>
        </HouseItem>
      ))}
      {loading &&
        [...Array(4)].map((e, i) => (
          <Skeleton data-testid="skeleton" key={i} />
        ))}
    </HouseList>
  </div>
);

const HouseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-items: center;
  justify-content: space-evenly;
`;

const HouseItem = styled.div`
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

const overflowElipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Address = styled.p`
  color: var(--text-light);
  font-size: 0.95rem;
  margin-top: 0.75rem;
  ${overflowElipsis}
`;

const Owner = styled.p`
  margin-top: 0.3rem;
  font-size: 0.8rem;
  color: var(--text-light);
  overflow: hidden;
  ${overflowElipsis}
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Description = styled.div`
  padding: 1rem;
`;

const breatheAnimation = keyframes`
 0% { opacity: 100% }
 50% { opacity: 50% }
 100% { opacity: 100% }
`;

const Skeleton = styled.div`
  height: 320px;
  width: 320px;
  background-color: #cecece;
  animation: ${breatheAnimation} 1.3s infinite;
`;

export default Houses;
