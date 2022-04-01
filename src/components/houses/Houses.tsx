import Image from "next/image";
import { currency } from "@/helpers/formatter";
import { House } from "@/model/house";

import {
  Address,
  Description,
  HouseItem,
  HouseList,
  MessageContainer,
  Owner,
  Price,
  Skeleton,
} from "./styled";

import InfoMessage from "@/components/message/Message";

type Props = {
  houses: House[];
  loading?: boolean;
  hasMore?: boolean;
};

const Houses = ({ houses, loading = false, hasMore }: Props) => {
  return (
    <div>
      <HouseList data-testid="house-list">
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
      {!hasMore && (
        <MessageContainer>
          <InfoMessage>
            We couldn&apos;t find more houses. Please come back soon!
          </InfoMessage>
        </MessageContainer>
      )}
    </div>
  );
};

export default Houses;
