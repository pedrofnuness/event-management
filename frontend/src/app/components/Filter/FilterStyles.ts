import styled, { css } from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  padding: 80px 0;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.button<{ isSelected: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  margin: 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffff;
  transition: background-color 0.3s, transform 0.1s;

  ${({ isSelected }) =>
    !isSelected &&
    css`
      &:hover {
        background-color: #f5f6f7;
        transform: scale(1.15);
      };
    `};
  

  ${({ isSelected }) =>
    isSelected &&
    css`
      padding: 10px 20px;
      background-color: #b7b7b7;
    `};
`;