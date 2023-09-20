import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
  place-items: center;
  padding: 0 150px 100px 150px;
`;

export const LoadButton = styled.button`
  width: 200px;
  height: 45px;
  margin-bottom: 50px;
  margin-top: 50px;
  border: none;
  border-radius: 30px;

  background-color: #7B48B5;
  color: white;
`;