import styled from "styled-components";

export const FormPet = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1px;
  width: 100%;
  height: min-content;
  padding: 5px;
  //   margin: 15px;
  background-color: #666666;
  opacity: 0.9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Input = styled.input`
  width: 30%;
  height: 25px;
  padding: 0 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  color: #000;
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: #333;
    height: 30px;
  }
`;
export const Button = styled.button`
  width: 5%;
  height: 25px;
  padding: 0 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  color: #333;
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: #333;
  }
  @media (max-width: 768px) {
    width: 80%;
    align-self: center;
    margin 5px;
  }
`;
export const Label = styled.label`
  width: 10%;
  height: 25px;
  padding: 0 10px;
  margin-top: 10px;
  margin-right: 3px;
  border: 1px solid #ddd;
  background-color: #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  color: #000;
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: #333;
    height: 30px;
  }
`;
export const TextArea = styled.textarea`
  width: 10%;
  height: 25px;
  padding: 0 10px;
  margin: 10px 0;
  //   margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  color: #333;
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: #333;
    height: 40px;
  }
`;
