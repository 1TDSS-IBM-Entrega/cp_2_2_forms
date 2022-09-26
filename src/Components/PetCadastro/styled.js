import styled from "styled-components";

export const Container = styled.div`
  // lista de items
  display: flex;
  flex-flow: row wrap;
  row-gap: 1rem;
  column-gap: 1rem;
  align-items: center;
  background-color: #fff;
  width: 100%;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;
