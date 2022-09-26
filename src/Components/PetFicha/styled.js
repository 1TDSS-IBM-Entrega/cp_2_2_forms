import styled from "styled-components";

export const PetImage = styled.p`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin: 0;
  padding: 0;
`;
