import styled from 'styled-components';

export const Label = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const Input = styled.input`
 width: 240px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  margin-bottom: 15px;

  &:hover,
  &:focus {
    outline-color: #553c9a;
`;
