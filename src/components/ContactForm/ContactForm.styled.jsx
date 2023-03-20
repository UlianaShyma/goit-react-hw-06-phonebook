import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 30px 50px 30px 50px;
  border-radius: 4px;
  border: 1px solid #553c9a;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
  font-size: 25px;
`;

export const Input = styled.input`
  width: 260px;
  height: 30px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 4px 8px;

  &:hover,
  &:focus {
    outline-color: #553c9a;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 5px;
  font-size: 18px;
  width: 150px;
  height: 40px;
  border: none;
  color: white;
  border: 1px solid #ee725a;
  border-radius: 4px;
  font-size: 16px;
  fill: white;
  background-image: linear-gradient(150deg, #ee725a, #553c9a);
  transition: border 200ms cubic-bezier(0.4, 0, 0.2, 1), fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    fill: #ee725a;
    cursor: pointer;
    border: 2px solid #553c9a;
`;
