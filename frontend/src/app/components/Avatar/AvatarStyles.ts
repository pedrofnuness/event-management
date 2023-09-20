import styled from 'styled-components';

export const Image = styled.img.attrs(({ src }) => ({
  src: `http://localhost:4000/${src}`
}))<{ size: string }>`
  width: ${props => props.size || 70}px;
  height: ${props => props.size || 70}px;
  border-radius: 30%;
`;