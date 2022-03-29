import Image from "next/image";
import { currency } from "../helpers/formatter";
import styled from "styled-components";
import { House } from "../model/house";
import device from "../helpers/device";

type Props = {
  houses: House[];
};

const Houses = ({ houses }: Props) => (
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
            <Address>{house.address}</Address>
            <Price>{currency.format(house.price)}</Price>
          </Description>
        </HouseItem>
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
  border-radius: 0.3rem;
  overflow: hidden;
  border: 1px solid #eaeaea;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.4) 0 2px 8px 0;
  }
  @media (${device.md}) {
    max-width: none;
  }
`;

const Address = styled.p`
  color: gray;
  height: 2.3rem;
  overflow: hidden;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.75rem 0;
`;

const Description = styled.div`
  padding: 1rem;
`;

export default Houses;
