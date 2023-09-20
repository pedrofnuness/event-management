import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 50px;
  margin-top: 50px;

  background-color: #ffff;
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-family: sans-serif;
`

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  height: 200px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  padding: 20px 5px;
`;