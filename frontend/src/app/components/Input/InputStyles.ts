import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const Input = styled.input`
  padding: 15px;
  padding-left: 20px;
  border-radius: 10px;
  outline: none;
  border: 1px solid grey;

  &:focus {
    box-shadow: 0px 0px 2px grey;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
`;