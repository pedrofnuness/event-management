import styled from 'styled-components';

export const Button = styled.button`
  width: 250px;
  height: 60px;
  border: none;
  border-radius: 15px;
  background-color: #7b48b5;

  color: white;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 16px;

  cursor: pointer; 

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;