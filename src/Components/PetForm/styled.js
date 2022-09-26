import styled from "styled-components";

export const FormPet = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 40%;
  height: 100%;
  padding: 5px;
  margin: 15px;
  background-color: #666666;
  opacity: 0.8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
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
  color: #333;
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: #333;
    height: 30px;
  }
`;
export const Button = styled.button`
  width: 15%;
  height: 40px;
  padding: 0 10px;
  margin: 10px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  color: #333;
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: #333;
  }
`;
export const Label = styled.label`
  width: 30%;
  height: 25px;
  padding: 0 10px;
  margin-top: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  background-color: #ccc;
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
export const TextArea = styled.textarea`
  width: 30%;
  height: 25px;
  padding: 0 10px;
  margin: 10px 0;
  margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  color: #333;
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: #333;
    height: 40px;
  }
`;
