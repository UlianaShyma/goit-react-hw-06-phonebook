import styled from 'styled-components';
import contactIcon from '../../icons/contactIcon.png';

export const List = styled.ul`
  font-size: 25px;
  margin-bottom: 20px;
  padding-left: 0px;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  &:not(:last-child) {
    margin-bottom: 23px;
  }

  &::before {
    content: '';
    background-image: url(${contactIcon});
    background-size: cover;
    position: absolute;
    width: 27px;
    height: 27px;
    left: -32px;
    top: 15%;
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-size: 15px;
  width: 100px;
  height: 35px;
  border: none;
  color: white;
  border: 1px solid #ee725a;
  border-radius: 4px;
  font-size: 16px;
  background-image: linear-gradient(150deg, #ee725a, #553c9a);
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    cursor: pointer;
    border: 2px solid #553c9a;

`;
