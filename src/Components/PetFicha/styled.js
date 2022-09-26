import styled from "styled-components";
// list of all the components that will be used in the PetFicha component
export const Div = styled.div`
  display: flex;
  flex-direction: column;

  width: 25%;
  height: auto;
  padding: 5px;
  margin: 10px;
  background-color: #ccc;
  opacity: 0.8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

export const P = styled.p`
  height: 25px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 16px;
  color: #888;
`;

export const Button = styled.button`
  width: 25%;
  align-self: flex-end;
  height: 25px;
  padding: 0 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  color: #333;
  @media (max-width: 768px) {
    width: 80%;
    align-self: center;
    margin 5px;
  }
`;

export const IMG = styled.img`
  width: 100%;
  height: 150px;
  object-fit: fill;
`;

export const SPAN = styled.span`
  width: 15%;
  height: 25px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 28px;
  color: #b22222;
  letter-spacing: 1px;
`;
export const SPAN2 = styled.span`
  width: 15%;
  height: 25px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 16px;
  color: #000;
`;
