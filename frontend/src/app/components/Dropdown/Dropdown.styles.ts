import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  font-size: 16px;
  width: 100%;
`;

export const SelectedOption = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 200px;
  background-color: #fff;
`;

export const OptionsList = styled.ul`
  z-index: 1;
  position: absolute;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  width: 220px;
`;

export const HostName = styled.p`
  padding-left: 10px;
`;

export const HostItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;