import styled, { keyframes } from "styled-components";

const SkeletonList = () => <>[...Array(4)].map((e, i) => <Skeleton key={i} />);

const breatheAnimation = keyframes`
 0% { opacity: 100% }
 50% { opacity: 60% }
 100% { opacity: 100% }
`;

const Skeleton = styled.div`
  height: 320px;
  width: 320px;
  background-color: #949494;
  animation: ${breatheAnimation} 2s infinite;
`;

export default SkeletonList;
